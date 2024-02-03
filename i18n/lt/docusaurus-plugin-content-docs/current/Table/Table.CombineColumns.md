---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Nurodyti stulpeliai sujungiami į naują stulpelį naudojant nurodytą sujungimo funkciją.


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

Nurodyti stulpeliai sujungiami į naują stulpelį naudojant nurodytą sujungimo funkciją.


## Examples

### Example #1 
Sujunkite vardą ir pavardę į naują stulpelį, atskirtą kableliais.
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
