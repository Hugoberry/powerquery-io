---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Combină coloanele specificate într-o coloană nouă utilizând funcţia de combinare specificată.


## Syntax

```powerquery
Table.CombineColumns(
    table as table,
    sourceColumns as list,
    combiner as function,
    column as text
) as table
```


## Details

Combină coloanele specificate într-o coloană nouă utilizând funcţia de combinare specificată.


## Examples

### Example #1 
Combinați numele și prenumele într-o coloană nouă, separate prin virgulă.
```powerquery
Table.CombineColumns(
    Table.FromRecords({[FirstName = "Bob", LastName = "Smith"]}),
    {"LastName", "FirstName"},
    Combiner.CombineTextByDelimiter(",", QuoteStyle.None),
    "FullName"
)
```

Result: 
```powerquery
Table.FromRecords({[FullName = "Smith,Bob"]})
```




## Category
Table.Transformation
