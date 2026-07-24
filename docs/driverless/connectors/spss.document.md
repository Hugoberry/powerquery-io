---
title: Spss.Document
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Spss.Document

<DriverlessBanner />

Returns the cases, dictionary and value labels of an SPSS system file
(`.sav`, `.zsav`).

## Syntax

```powerquery
Spss.Document(
    source as binary,
    optional options as record
) as table
```

## Remarks

Reading an SPSS file in Power BI has historically meant owning SPSS, or routing
through the R or Python script host with `haven` or `pyreadstat` — an
interpreter to install and configure, and Service refresh scenarios that don't
work. This function decodes the system file format directly.

The result is a navigation table with three rows, because a survey file's
dictionary is worth as much as its cases:

| Name | Contents |
|---|---|
| `Data` | one row per case |
| `Variables` | the data dictionary — name, label, type, format, measure, missing declarations |
| `ValueLabels` | variable, value, label |

Options:

-   `ApplyValueLabels` : A logical (true/false). Replace coded values with their
    value labels in `Data`; unlabeled values pass through (default is false).
-   `UserMissingToNull` : A logical (true/false). Values declared user-missing in
    the dictionary, discrete or ranges, become null — matching how SPSS treats
    them in analysis (default is false). System-missing is always null.
-   `Encoding` : A `TextEncoding.Type` or codepage number for dictionary and data
    text, overriding what the file declares. Files declaring nothing default to
    Windows-1252.
-   `MaxRows` : A number. Stop after this many cases.
-   `Strict` : A logical (true/false). When true, tolerated malformations become
    errors — a trailing partial case, value-label indices pointing into the
    middle of a string, or numeric data found in a string column (default is
    false).

## Examples

### Example #1
Read the cases.
```powerquery
let
    Doc  = Spss.Document(File.Contents("C:\data\survey.sav")),
    Data = Doc{[Name = "Data"]}[Data]
in
    Data
```

### Example #2
Read the cases as a human would see them in SPSS: labels instead of codes, and
user-missing treated as missing.
```powerquery
let
    Doc = Spss.Document(
        File.Contents("C:\data\survey.sav"),
        [ApplyValueLabels = true, UserMissingToNull = true]
    )
in
    Doc{[Name = "Data"]}[Data]
```

### Example #3
Build a codebook from the dictionary.
```powerquery
let
    Doc  = Spss.Document(File.Contents("C:\data\survey.sav")),
    Vars = Doc{[Name = "Variables"]}[Data],
    Vals = Doc{[Name = "ValueLabels"]}[Data]
in
    Table.NestedJoin(Vars, {"Name"}, Vals, {"Variable"}, "Labels", JoinKind.LeftOuter)
```

## Supported

`.sav` uncompressed, `.sav` bytecode-compressed (what SPSS writes by default),
and `.zsav` (zlib, including multi-block); numeric and string variables; long
variable names; very long strings (width over 255, reassembled across segments);
variable labels; value labels including long-string value labels; user-missing
declarations, discrete and ranges; measurement level, display width and
alignment; DATE/DATETIME/TIME formats decoded to M `date`/`datetime`/`duration`
against the SPSS epoch of 1582-10-14; character encoding from the file's own
declaration, including legacy codepage files.

## Not supported

-   Big-endian files, written by pre-2000 UNIX SPSS — clear error.
-   EBCDIC files — clear error.
-   Case weights, which are reported in the metadata but not applied.

## Metadata

`Spss.Product`, `Spss.FileLabel`, `Spss.CreationDate`, `Spss.Compression`,
`Spss.CodePage`, `Spss.CaseCount`, `Spss.WeightVariable`, `Spss.Documents`.

## Category
Driverless connectors
