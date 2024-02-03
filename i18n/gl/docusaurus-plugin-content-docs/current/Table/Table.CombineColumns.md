---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Combina as columnas especificadas nunha nova columna utilizando a función do combinador especificada.


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

Combina as columnas especificadas nunha nova columna utilizando a función do combinador especificada.


## Examples

### Example #1 
Combina os nomes primeiros e últimos nunha nova columna, separados por unha coma.
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
