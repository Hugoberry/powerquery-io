---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Combina les columnes especificades en una columna nova mitjançant la funció de combinació especificada.


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

Combina les columnes especificades en una columna nova mitjançant la funció de combinació especificada.


## Examples

### Example #1 
Combina els noms i cognoms en una columna nova, separats per comes.
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
