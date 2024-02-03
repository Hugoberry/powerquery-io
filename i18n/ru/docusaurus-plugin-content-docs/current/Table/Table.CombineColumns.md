---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Объединяет указанные столбцы в новый столбец с помощью заданной функции объединения.


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

Объединяет указанные столбцы в новый столбец с помощью заданной функции объединения.


## Examples

### Example #1 
Объединение фамилий и имен в новом столбце с разделением запятыми.
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
