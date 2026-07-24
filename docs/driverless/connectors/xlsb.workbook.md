---
title: Xlsb.Workbook
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Xlsb.Workbook

<DriverlessBanner />

Returns a navigation table of the worksheets in an Excel Binary Workbook
(`.xlsb`).

## Syntax

```powerquery
Xlsb.Workbook(
    source as binary,
    optional options as record
) as table
```

## Remarks

Like `.xls`, `.xlsb` is read through ACE, so it forces a gateway in Power Query
Online even for a file already sitting in SharePoint or Blob storage. This
function parses BIFF12-in-ZIP directly.

The correctness argument applies here too, and more sharply: `.xlsb` is what
people reach for when a workbook is large, and large workbooks are exactly where
ACE's type guessing from the first rows quietly nulls out the values that don't
match. Every cell is decoded from its own record type instead.

Options:

-   `IncludeHiddenSheets` : A logical (true/false). List hidden and very-hidden
    sheets, marked by a `Hidden` column (default is false).
-   `PromoteHeaders` : A logical (true/false). Use each sheet's first row as
    column headers (default is false).
-   `DetectDates` : A logical (true/false). Convert numbers whose cell format is
    a date/time format into `datetime` values (default is true).
-   `MaxRows` : A number. Return at most this many rows per sheet.
-   `Strict` : A logical (true/false). When true, tolerated malformations become
    errors — a shared-string index out of range, or stray cells appearing before
    any row record (default is false).

## Examples

### Example #1
Read a sheet.
```powerquery
let
    Wb    = Xlsb.Workbook(File.Contents("C:\data\big.xlsb")),
    Sheet = Wb{[Name = "Data"]}[Data]
in
    Sheet
```

### Example #2
Peek at a large workbook cheaply — `MaxRows` stops the decode rather than
trimming a finished result.
```powerquery
let
    Wb = Xlsb.Workbook(File.Contents("C:\data\big.xlsb"), [MaxRows = 100]),
    S  = Wb{0}[Data]
in
    S
```

## Supported

BIFF12 worksheets; shared, inline and formula-cached strings; RK-packed and
full-precision numbers; booleans; error cells; blank (styled) cells; cached
formula results; hidden sheets; date/time detection from builtin and custom
number formats; the 1904 date system; stored and deflated ZIP entries.

## Not supported

-   Encrypted workbooks — they are CFB files rather than ZIP, clear error.
-   Zip64 archives — clear error.
-   Live formula evaluation. The cached result is returned.
-   Pivot caches, tables, comments and other non-cell content.
-   Charts and macros, which are ignored.

Excel serial numbers convert to `datetime` at sub-millisecond precision. Serials
1-59 use the 1900-02-28 display convention (matching Excel, not OLE), and the
fictitious 1900-02-29 becomes 1900-03-01.

## Metadata

`Xlsb.Date1904`.

## Category
Driverless connectors
