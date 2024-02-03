---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

指定された結合関数を使用して、指定された列を新しい列に結合します。


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

指定された結合関数を使用して、指定された列を新しい列に結合します。


## Examples

### Example #1 
姓と名を新しい列に結合し、コンマで区切ります。
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
