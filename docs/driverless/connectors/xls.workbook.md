---
title: Xls.Workbook
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Xls.Workbook

<DriverlessBanner />

Returns a navigation table of the worksheets in a legacy Excel workbook (`.xls`).

## Syntax

```powerquery
Xls.Workbook(
    source as binary,
    optional options as record
) as table
```

## Remarks

Power Query reads `.xls` through the Access Database Engine (ACE), which cannot
be installed in cloud environments. That forces a gateway in Power Query Online
even when the file already sits in SharePoint or Blob storage. This function
parses BIFF8-in-CFB directly, so no engine is involved.

It is also more accurate than the ACE path. ACE infers each column's type from
the first several rows and nulls out values that disagree with the guess; this
reader decodes every cell from its own record type, so a mixed column stays
mixed.

Options:

-   `IncludeHiddenSheets` : A logical (true/false). List hidden and very-hidden
    sheets, marked by a `Hidden` column (default is false).
-   `PromoteHeaders` : A logical (true/false). Use each sheet's first row as
    column headers (default is false).
-   `DetectDates` : A logical (true/false). Convert numbers whose cell format is
    a date/time format into `datetime` values (default is true). Set false to
    get raw Excel serial numbers.
-   `MaxRows` : A number. Return at most this many rows per sheet.
-   `Strict` : A logical (true/false). When true, tolerated malformations become
    errors — a shared-string index out of range, or an inline string truncated
    at a record boundary (default is false).

## Examples

### Example #1
Read one sheet with its first row promoted to headers.
```powerquery
let
    Wb    = Xls.Workbook(File.Contents("C:\data\report.xls"), [PromoteHeaders = true]),
    Sheet = Wb{[Name = "Sheet1"]}[Data]
in
    Sheet
```

### Example #2
Find data someone hid rather than deleted.
```powerquery
let
    Wb     = Xls.Workbook(File.Contents("C:\data\report.xls"), [IncludeHiddenSheets = true]),
    Hidden = Table.SelectRows(Wb, each [Hidden] = true)
in
    Hidden
```

## Supported

BIFF8 (Excel 97-2003) workbooks in their CFB container, including streams stored
in the mini-stream; SST shared strings across `CONTINUE` records (including
strings split mid-text that restart with a fresh flags byte); `RK`, `MULRK`,
`NUMBER`, `LABELSST`, `LABEL`, `RSTRING`, `BOOLERR`, `BLANK`, `MULBLANK` and
`FORMULA` records with cached number, string, boolean and error results; hidden
sheets; date/time detection from builtin and custom number formats; the 1904
date system.

## Not supported

-   BIFF5/BIFF7 (Excel 5.0/95) — clear error.
-   Encrypted or password-protected workbooks — clear error.
-   Chart sheets and macro sheets, which are skipped.
-   Inline `LABEL` strings spanning a `CONTINUE` record, which are truncated
    unless `Strict = true`.
-   Live formula evaluation. The cached result is returned.
-   Pivot caches, comments and shapes, which are ignored.

Excel serial numbers convert to `datetime` at sub-millisecond precision. Serials
1-59 use the 1899-12-31 epoch so displayed dates match Excel (the Lotus
leap-year bug), and the fictitious 1900-02-29 becomes 1900-03-01.

## Metadata

`Xls.Date1904`.

## Category
Driverless connectors
