---
title: Connector syntax
sidebar_position: 2
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Connector syntax

<DriverlessBanner />

Every driverless connector follows the same contract. Learn it once and the
other thirteen behave the way you expect.

```powerquery
Reader.Function(
    source as binary,
    optional options as record
) as table
```

## The source is always a binary

No connector takes a file path, a connection string or a URL. It takes bytes.
That is the single design decision the whole thing rests on: acquiring the file
and decoding the file are separate problems, and Power Query already solved the
first one.

So the same call works wherever the file lives:

```powerquery
// local disk
Sqlite3.Database(File.Contents("C:\data\chinook.db"))

// SharePoint, OneDrive — refreshes in the Service with no gateway
Sqlite3.Database(SharePoint.Files("https://contoso.sharepoint.com/sites/data"){[Name = "chinook.db"]}[Content])

// Azure Blob storage
Sqlite3.Database(AzureStorage.Blobs("https://contoso.blob.core.windows.net/data"){[Name = "chinook.db"]}[Content])

// a public URL
Sqlite3.Database(Web.Contents("https://example.com/chinook.db"))
```

It also means a whole folder of files is a `Table.AddColumn` away:

```powerquery
let
    Files   = Folder.Files("C:\exports"),
    Dbfs    = Table.SelectRows(Files, each Text.Lower([Extension]) = ".dbf"),
    Decoded = Table.AddColumn(Dbfs, "Data", each Dbf.Table([Content]))
in
    Decoded
```

Credentials are whatever the source function already uses. The connectors never
prompt for anything of their own.

## Two output shapes

**Single-table formats return the table directly.** A `.dbf` file is one table,
an `.avro` file is one stream of records, an `.evtx` file is one log:

```powerquery
Dbf.Table(File.Contents("C:\data\customers.dbf"))
```

**Container formats return a navigation table.** A database, a workbook or a
`.mat` file holds several things, so the connector returns one row per item with
the decoded value in a `Data` column. Drill in by name:

```powerquery
let
    db  = Sqlite3.Database(File.Contents("C:\data\chinook.db")),
    tbl = db{[Name = "tracks"]}[Data]
in
    tbl
```

The navigation table carries the `ItemKind` / `ItemName` / `IsLeaf` columns
Power Query looks for, so in the editor you get the ordinary navigator
experience — double-click a row instead of writing the lookup by hand.

Which connectors do what:

| Shape | Connectors |
|---|---|
| Table | `Dbf.Table`, `Avro.Document`, `Evtx.Document` |
| Navigation table | `Sqlite3.Database`, `Gpkg.Database`, `Mbtiles.Document`, `AccessReader.Database`, `Xls.Workbook`, `Xlsb.Workbook`, `Spss.Document`, `Stata.Document`, `Matlab.Document` |

`Spss.Document` and `Stata.Document` always return the same three rows — `Data`,
`Variables` and `ValueLabels` — because a survey file's dictionary is worth as
much as its cases.

## The options record

The second argument is an optional record, and every key in it is optional too:

```powerquery
Dbf.Table(
    File.Contents("C:\data\customers.dbf"),
    [
        Memo     = File.Contents("C:\data\customers.fpt"),
        Encoding = 1252,
        MaxRows  = 1000
    ]
)
```

Four keys mean the same thing everywhere they appear:

| Option | Type | Meaning |
|---|---|---|
| `MaxRows` | number | Stop after this many rows. Decoding actually stops — this is not a `Table.FirstN` over a full decode — so it is the right tool for probing a large unfamiliar file. |
| `Strict` | logical, default `false` | Turn tolerated malformations into errors. Off, a reader recovers what it can (a bad date becomes null, a corrupt EVTX chunk is skipped). On, it fails loudly. Use it to validate a file, not to load one. |
| `Encoding` | `TextEncoding.Type` or codepage number | Override the text encoding the file declares — or supply one for formats that declare nothing. Accepts a raw codepage number, which matters for the legacy formats where `TextEncoding` has no member for what you need. |
| `PromoteHeaders` | logical, default `false` | Use the first row as column headers. Workbook readers only. |

Everything else is specific to the format, and is listed on that connector's
page.

## Metadata

Header facts that aren't rows — the file format version, the codepage, the
creation date, how many records the header claimed — are attached to the result
as metadata rather than smuggled into columns:

```powerquery
let
    t = Dbf.Table(File.Contents("C:\data\customers.dbf")),
    m = Value.Metadata(t)
in
    m[Dbf.Codepage]
```

Keys are namespaced by connector: `Dbf.Version`, `Sqlite3.PageSize`,
`Access.Version`, `Evtx.IsDirty`, `Spss.Product`, `Avro.Schema`, and so on. Each
connector page lists its own.

This is worth knowing about for one reason in particular: when a reader recovers
from damage rather than failing, the metadata is where it tells you. A dirty
event log reports `Evtx.SkippedRecords`, and a query that silently returns 40,000
of 41,000 events looks identical to one that returned everything unless you look.

## Errors

Failures raise `DataFormat.Error` with a message that names the actual problem —
an encrypted Access database, a Stata 7 file, a MAT-file saved as v7.3. The
readers try hard not to fail obscurely: an unsupported format variant is
detected and named rather than producing garbage rows.

## Function naming

Names follow the convention Power Query already uses for its own readers, so
that a connector reads like a built-in: `.Database` for a database file,
`.Workbook` for a spreadsheet, `.Table` for a single-table file, and `.Document`
for everything else.

One exception is worth knowing about. The Access reader is
**`AccessReader.Database`**, not `Access.Database`, because that name is already
a built-in engine function — a query can shadow it, but a section document
cannot declare it, so the pasted reader and the packaged one would otherwise
carry different names. One name, both delivery paths.
