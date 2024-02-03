---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Összevonja a megadott oszlopokat egy új oszlopba a megadott egyesítő függvény használatával.


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

Összevonja a megadott oszlopokat egy új oszlopba a megadott egyesítő függvény használatával.


## Examples

### Example #1 
A vezeték- és az utónevek új oszlopban való egyesítése, vesszővel elválasztva.
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
