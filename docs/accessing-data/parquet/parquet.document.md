---
title: Parquet.Document
---

# Parquet.Document


Returns the contents of the Parquet document as a table.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

Returns the contents of the Parquet document as a table. Options include:

-   `TypeMapping` : A text value that controls the default type mapping when reading and writing files. The default value is null and attempts to preserve as much fidelity as possible to the original type. A value of "Sql" will produce results most compatible with Sql Server.



## Category
Accessing data

import Partial_Parquet_Document from './_parquet.document.mdx'

<Partial_Parquet_Document />
