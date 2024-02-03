---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Combina as colunas especificadas em uma nova coluna usando a função de combinação especificada.


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

Combina as colunas especificadas em uma nova coluna usando a função de combinação especificada.


## Examples

### Example #1 
Combinar o sobrenome e o primeiro nome em uma nova coluna, separados por uma vírgula.
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
