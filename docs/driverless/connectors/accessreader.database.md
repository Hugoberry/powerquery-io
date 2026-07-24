---
title: AccessReader.Database
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# AccessReader.Database

<DriverlessBanner />

Returns a navigation table of the user tables in a Microsoft Access database.

## Syntax

```powerquery
AccessReader.Database(
    source as binary,
    optional options as record
) as table
```

## Remarks

Access is the format where the install pain is sharpest. A native connector
exists, but it is a wrapper over the ACE OLE DB provider: bitness must match on
the Desktop, 64-bit ACE must be installed on the gateway, Click-to-Run Office
virtualizes its ACE copy so the gateway never sees it, and cloud hosts cannot
install it at all. The result is the familiar
`The 'Microsoft.ACE.OLEDB.12.0' provider is not registered`.

This function parses the Jet 4 and ACE page format directly, so none of that
applies. It reads `.mdb` (Access 2000-2003) and `.accdb` (Access 2007 and later).

:::note Why not `Access.Database`?
[`Access.Database`](/accessing-data/access/access.database) is the built-in,
ACE-backed function and the name is taken. A query can shadow it, but a section
document cannot declare it, so this reader carries a name that works identically
whether you pasted the source or loaded `PQDriverless.mez`.
:::

Options:

-   `IncludeSystemObjects` : A logical (true/false). Include `MSys*` and other
    system tables in the navigation table (default is false).
-   `MaxRows` : A number. Stop after this many rows per table.
-   `Strict` : A logical (true/false). When true, tolerated malformations become
    errors — an unsupported column type, or an unknown usage-map format that
    would otherwise fall back to a full-file page scan (default is false).

## Examples

### Example #1
Read a table from an `.accdb`.
```powerquery
let
    Source = File.Contents("C:\data\example.accdb"),
    Db     = AccessReader.Database(Source),
    Orders = Db{[Name = "Orders"]}[Data]
in
    Orders
```

### Example #2
Check what version of Access wrote the file.
```powerquery
let
    Db = AccessReader.Database(File.Contents("C:\data\example.accdb"))
in
    Value.Metadata(Db)[Access.Version]
```

## Supported

Jet 4 (`.mdb`) and ACE (`.accdb`); all common column types — Byte, Integer,
Long, Currency, Single, Double, Date/Time, Text, Memo/Long Text, Yes/No, GUID,
Decimal, Binary, OLE and Big Integer; fixed and variable columns; null bitmaps;
Unicode-compressed text; single- and multi-page memo/OLE (LVAL) storage;
deleted-row and overflow-row bookkeeping; multi-page table definitions; and rows
written before later columns were added.

## Not supported

-   Encrypted or password-protected databases — detected, with a clear error.
-   Jet 3 (`.mdb` from Access 97 and earlier) — a different layout, clear error.
-   Linked tables and queries. They hold no local data, so they are not listed.
-   Indexes, which aren't needed to read.
-   Complex/multi-value and attachment columns decode to the raw long-integer
    key of their hidden child table.

Integers beyond 2<sup>53</sup> lose precision, as do Currency values beyond
2<sup>53</sup>/10000 and wide Decimal values.

## Metadata

`Access.Version`, `Access.Format`, `Access.CreationDate`.

## Category
Driverless connectors
