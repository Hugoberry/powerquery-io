---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Kombinuje navedene kolone u novu kolonu pomoću navedene funkcije kombinovanja.


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

Kombinuje navedene kolone u novu kolonu pomoću navedene funkcije kombinovanja.


## Examples

### Example #1 
Kombinujte prezime i imena u novu kolonu, razdvojene zarezom.
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
