---
title: Table.CombineColumns
---

# Table.CombineColumns


Combinar as colunas especificadas numa coluna nova utilizando a função de combinação especificada.


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

Combinar as colunas especificadas numa coluna nova utilizando a função de combinação especificada.


## Examples

### Example #1 
Combine os nomes próprios e apelidos numa nova coluna, separados por uma vírgula.
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
