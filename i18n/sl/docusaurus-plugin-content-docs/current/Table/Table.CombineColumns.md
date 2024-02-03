---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Združi navedene stolpce v nov stolpec z določeno funkcijo združitve.


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

Združi navedene stolpce v nov stolpec z določeno funkcijo združitve.


## Examples

### Example #1 
Združite priimke in imena v nov stolpec, ločene z vejico.
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
