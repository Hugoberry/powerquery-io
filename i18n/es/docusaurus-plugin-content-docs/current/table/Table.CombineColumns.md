---
title: Table.CombineColumns
---

# Table.CombineColumns


Combina las columnas especificadas en una nueva columna con la función especificada de combinador.


## Syntax

```powerquery
Table.CombineColumns(
    table as table,
    sourceColumns as list,
    combiner as function,
    column as text
) as table
```


## Remarks

Combina las columnas especificadas en una nueva columna con la función especificada de combinador.


## Examples

### Example #1 
Combine los apellidos y los nombres en una nueva columna, separadas por una coma.
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
