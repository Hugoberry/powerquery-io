---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Samler de angivne kolonner i en ny kolonne ved hjælp af den angivne samlefunktion.


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

Samler de angivne kolonner i en ny kolonne ved hjælp af den angivne samlefunktion.


## Examples

### Example #1 
Kombiner sidste og første navn til en ny kolonne adskilt af et komma.
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
