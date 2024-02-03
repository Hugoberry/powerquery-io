---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Norādītās kolonnas tiek apvienotas jaunā kolonnā, izmantojot norādīto apvienošanas funkciju.


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

Norādītās kolonnas tiek apvienotas jaunā kolonnā, izmantojot norādīto apvienošanas funkciju.


## Examples

### Example #1 
Apvieno vārdus un uzvārdus, atdalot tos ar komatu, jaunā kolonnā.
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
