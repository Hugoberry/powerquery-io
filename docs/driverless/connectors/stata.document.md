---
title: Stata.Document
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Stata.Document

<DriverlessBanner />

Returns the observations, dictionary and value labels of a Stata dataset
(`.dta`).

## Syntax

```powerquery
Stata.Document(
    source as binary,
    optional options as record
) as table
```

## Remarks

Like SPSS, the usual routes into a `.dta` file are Stata itself or the R/Python
script host. This function decodes the dataset format directly, across every
release from Stata 8 to Stata 19.

The result is a navigation table with three rows:

| Name | Contents |
|---|---|
| `Data` | one row per observation |
| `Variables` | the data dictionary — name, label, storage type, display format |
| `ValueLabels` | variable, value, label |

Options:

-   `ApplyValueLabels` : A logical (true/false). Replace coded values with their
    value labels in `Data`; unlabeled values pass through, and a labeled extended
    missing shows its label (default is false).
-   `ExtendedMissingToText` : A logical (true/false). The extended missing codes
    `.a`-`.z` become the texts `".a"`-`".z"` instead of null (default is false).
    System missing (`.`) is always null.
-   `Encoding` : A `TextEncoding.Type` or codepage number for all text, overriding
    the default — UTF-8 for formats 118 and 119, Windows-1252 for the older
    ASCII-era formats.
-   `MaxRows` : A number. Stop after this many observations.
-   `Strict` : A logical (true/false). When true, tolerated malformations become
    errors — a `strL` pointer with no backing GSO, or a truncated value-label
    trailer (default is false).

## Examples

### Example #1
Read the observations.
```powerquery
let
    Doc  = Stata.Document(File.Contents("C:\data\survey.dta")),
    Data = Doc{[Name = "Data"]}[Data]
in
    Data
```

### Example #2
Keep Stata's extended missing codes as something you can act on. A dataset that
distinguishes "refused" from "not applicable" encodes both as missing, and
collapsing them to null throws that away.
```powerquery
let
    Doc = Stata.Document(
        File.Contents("C:\data\survey.dta"),
        [ExtendedMissingToText = true]
    )
in
    Doc{[Name = "Data"]}[Data]
```

## Supported

Formats 113, 114, 115 (Stata 8-12), 117 (Stata 13), 118 (Stata 14-19) and 119
(Stata 15-19, over 32,767 variables); both byte orders (LSF and MSF); all five
numeric storage types with the Stata missing codes (`.`, `.a`-`.z`, encoded at
the top of each numeric range); `str#` and `strL` variables including
cross-linked, empty and binary GSOs; value labels including labels on extended
missing codes; variable labels; dataset label and timestamp; sort order;
`%td`/`%tc`/`%tC`/`%tm`/`%tq`/`%th`/`%tw` formats decoded to M `date`/`datetime`
against the Stata epoch of 1960-01-01; characteristics and expansion fields
skipped structurally.

## Not supported

-   Formats written by Stata 7 or older — clear error.
-   Formats 120/121 (alias variables, Stata 18+) — clear error.
-   `%tC` values are decoded like `%tc`, so leap seconds are not subtracted.
-   `%tb` business-calendar and `%ty` year values stay numeric.

## Metadata

`Stata.Release`, `Stata.ByteOrder`, `Stata.DatasetLabel`, `Stata.Timestamp`,
`Stata.ObservationCount`, `Stata.VariableCount`, `Stata.SortedBy`,
`Stata.Encoding`.

## Category
Driverless connectors
