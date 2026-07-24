---
title: Matlab.Document
---

import DriverlessBanner from '@site/src/components/DriverlessBanner';

# Matlab.Document

<DriverlessBanner />

Returns a navigation table of the variables in a MATLAB MAT-file (`.mat`).

## Syntax

```powerquery
Matlab.Document(
    source as binary,
    optional options as record
) as table
```

## Remarks

Reading a `.mat` file normally costs a MATLAB licence or a Python interpreter
with SciPy. This function decodes MAT-file level 5 directly — the format written
by MATLAB v5 through v7.2 (`save -v6` and `save -v7`) and by
`scipy.io.savemat`.

The navigation table has one row per variable, with `Name`, `Class`,
`Dimensions` and `Data` columns. Each variable converts to the M value that fits
its shape:

| MATLAB value | Becomes |
|---|---|
| 1x1 | the scalar itself (complex: a `[Re, Im]` record) |
| 1xN or Nx1 | a list (a char row vector becomes text) |
| MxN | a table with columns `C1`..`CN` (a char matrix becomes a list of texts) |
| more than 2 dimensions | a long table `D1`..`Dk` plus `Value`, column-major |
| 1x1 struct | a record of fields |
| struct array | a table, one row per element, one column per field |
| cell array | shaped like a numeric array, elements converted recursively |
| sparse | a table of `Row`, `Column`, `Value`, 1-based, in column-major order |
| any empty array | null (an empty char becomes `""`) |

Options:

-   `Encoding` : A `TextEncoding.Type` or codepage number for char data stored
    in the legacy 8-bit form (`miINT8`/`miUINT8`), default Windows-1252.
    UTF-8/16/32 char data carries its own encoding and is unaffected.
-   `Strict` : A logical (true/false). When true, tolerated malformations become
    errors — an unknown top-level element type, a compressed element that does
    not hold a matrix, or a function handle (default is false).

## Examples

### Example #1
Read one variable.
```powerquery
let
    Doc = Matlab.Document(File.Contents("C:\data\results.mat")),
    M   = Doc{[Name = "measurements"]}[Data]
in
    M
```

### Example #2
See what's in the file and how big each variable is, before decoding anything.
```powerquery
let
    Doc = Matlab.Document(File.Contents("C:\data\results.mat"))
in
    Table.SelectColumns(Doc, {"Name", "Class", "Dimensions"})
```

## Supported

MAT-file level 5 as written by MATLAB v5 through v7.2 and by
`scipy.io.savemat`; both byte orders (`IM` little-endian and `MI` big-endian);
compressed variables (v7, zlib) and uncompressed (v6); numeric storage
compression, such as a double array stored as int8; all numeric classes
`int8`-`uint64`, `single` and `double`; logical, char, complex, cell arrays,
structs and struct arrays, objects (read as structs), sparse matrices and
N-dimensional arrays.

## Not supported

-   v7.3 files. Those are HDF5 containers and need a different reader entirely —
    clear error, and re-saving with `save -v7` is the fix.
-   v4 files — clear error.
-   Function handles and opaque/Java objects, which load as null (an error under
    `Strict`).

`int64`/`uint64` values beyond 2<sup>53</sup> lose precision.

## Metadata

`Matlab.HeaderText`, `Matlab.ByteOrder`, `Matlab.SubsystemDataOffset`,
`Matlab.VariableCount`.

## Category
Driverless connectors
