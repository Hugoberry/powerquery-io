---
title: Sqlite3.Database
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Sqlite3.Database

<DriverlessBanner />

Returns a navigation table of the tables in a SQLite database file.

## Syntax

```powerquery
Sqlite3.Database(
    source as binary,
    optional options as record
) as table
```

## Remarks

Power BI has no native SQLite connector. The usual answer is the SQLite ODBC
driver and its machine-level install, which is unavailable on a locked-down
desktop, awkward on a gateway and impossible in the Service. This function
parses the [SQLite file format](https://www.sqlite.org/fileformat2.html)
directly — header, table b-trees, varints, record serial types, overflow pages —
so `.sqlite`, `.db` and `.db3` files read anywhere Power Query runs.

It is also the shared SQLite core behind
[`Gpkg.Database`](gpkg.database.md) and
[`Mbtiles.Document`](mbtiles.document.md).

Options:

-   `MaxRows` : A number. Decode at most this many rows per table. Decoding
    stops at the limit rather than trimming a full result.

## Examples

### Example #1
Read one table out of a database.
```powerquery
let
    Source = File.Contents("C:\data\chinook.db"),
    Db     = Sqlite3.Database(Source),
    Tracks = Db{[Name = "tracks"]}[Data]
in
    Tracks
```

### Example #2
List what's in the file without decoding any of it.
```powerquery
let
    Db = Sqlite3.Database(File.Contents("C:\data\chinook.db"))
in
    Table.SelectColumns(Db, {"Name"})
```

### Example #3
Read a database straight out of SharePoint — this refreshes in the Power BI
Service with no gateway and no driver.
```powerquery
let
    Files  = SharePoint.Files("https://contoso.sharepoint.com/sites/data", [ApiVersion = 15]),
    File   = Files{[Name = "chinook.db"]}[Content],
    Tracks = Sqlite3.Database(File){[Name = "tracks"]}[Data]
in
    Tracks
```

## Supported

Ordinary rowid tables, all record serial types, overflow pages, `INTEGER PRIMARY
KEY` rowid aliasing, UTF-8 / UTF-16LE / UTF-16BE databases, short records left
by `ALTER TABLE ADD COLUMN`, and multi-level b-trees.

Integers decode exactly across the full signed 64-bit range, though downstream M
arithmetic on them may still coerce to double past 2<sup>53</sup>.

## Not supported

-   `WITHOUT ROWID` tables — they use the index b-tree layout.
-   Virtual tables.
-   Un-checkpointed data in a `-wal` file. Only the main database file is read,
    so anything still sitting in a write-ahead log is invisible. Checkpoint the
    database before reading it if that matters.

## Metadata

`Sqlite3.PageSize`, `Sqlite3.Encoding`, `Sqlite3.WalMode`.

## Category
Driverless connectors
