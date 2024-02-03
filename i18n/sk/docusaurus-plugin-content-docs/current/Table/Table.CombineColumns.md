---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Kombinuje zadané stĺpce do nového stĺpca pomocou zadanej funkcie kombinovača.


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

Kombinuje zadané stĺpce do nového stĺpca pomocou zadanej funkcie kombinovača.


## Examples

### Example #1 
Skombinujte priezviská a krstné mená do nového stĺpca oddelené čiarkou.
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
