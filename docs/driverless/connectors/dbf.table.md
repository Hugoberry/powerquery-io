---
title: Dbf.Table
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Dbf.Table

<DriverlessBanner />

Returns the contents of a dBASE or FoxPro table as a table.

## Syntax

```powerquery
Dbf.Table(
    source as binary,
    optional options as record
) as table
```

## Remarks

The applications built on FoxPro and dBASE never quite died, and their `.dbf`
files still land on file shares. The only sanctioned reader is the 32-bit Visual
FoxPro OLE DB / ODBC driver from 2007, which is a hard sell on a modern
64-bit gateway. This function parses the format directly: dBASE III through
Visual FoxPro, memo sidecars, null flags, varchar, deleted-record flags and
language-driver codepages.

Memo fields (`M`, and FoxPro `G`/`P`/`W`) keep their text in a sidecar file —
`.fpt` for FoxPro, `.dbt` for dBASE. Pass it as the `Memo` option, or those
columns come back null.

Options:

-   `Memo` : A binary. The `.fpt` / `.dbt` memo sidecar.
-   `Encoding` : A `TextEncoding.Type` or codepage number, overriding the file's
    language-driver byte. Files that declare nothing default to 1252.
-   `IncludeDeleted` : A logical (true/false). Keep records flagged as deleted
    and append a `_Deleted` logical column (default is false).
-   `MaxRows` : A number. Stop after this many rows.
-   `Strict` : A logical (true/false). When true, tolerated malformations become
    errors — bad numerics, dates or logicals, a truncated record area, field
    lengths that disagree with the header, or memo pointers with no `Memo`
    supplied (default is false).

## Examples

### Example #1
Read a table with no memo fields.
```powerquery
Dbf.Table(File.Contents("C:\data\customers.dbf"))
```

### Example #2
Read a FoxPro table with its memo sidecar.
```powerquery
let
    Source = File.Contents("C:\data\customers.dbf"),
    Memo   = File.Contents("C:\data\customers.fpt")
in
    Dbf.Table(Source, [Memo = Memo])
```

### Example #3
Include deleted records — a `.dbf` keeps them until the table is packed, which
makes this a genuinely useful recovery path.
```powerquery
let
    All     = Dbf.Table(File.Contents("C:\data\customers.dbf"), [IncludeDeleted = true]),
    Deleted = Table.SelectRows(All, each [_Deleted] = true)
in
    Deleted
```

## Supported

dBASE III/IV/5 (`0x03`, `0x83`, `0x8B` and friends), FoxBASE (`0x02`, `0xFB`),
FoxPro 2.x (`0xF5`) and Visual FoxPro (`0x30`/`0x31`/`0x32`); field types
`C N F D L M I B Y T V Q G P W` and `+`, including VFP null flags,
Varchar/Varbinary lengths, Char fields wider than 255 bytes and comma decimal
separators; dBASE III (`0x1A`-terminated), dBASE IV (length-prefixed) and FoxPro
(typed, block-sized) memo sidecars; deleted-record flags; language-driver
codepages.

## Not supported

-   dBASE Level 7 (`0x04`/`0x8C`) — a different header layout, clear error.
-   Encrypted tables.
-   Index sidecars (`.mdx`, `.cdx`), which are never needed to read the data.

Currency (`Y`) is a scaled 64-bit integer, so values past 15 significant digits
lose precision.

## Metadata

`Dbf.Version`, `Dbf.Dialect`, `Dbf.Codepage`, `Dbf.LastUpdate`,
`Dbf.RecordCount`.

## Category
Driverless connectors
