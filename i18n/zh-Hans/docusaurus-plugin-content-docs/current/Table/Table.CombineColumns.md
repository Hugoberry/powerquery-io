---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

使用指定的组合程序函数将指定的列组合为一个新列。


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

使用指定的组合程序函数将指定的列组合为一个新列。


## Examples

### Example #1 
将姓、名合并到新列中，用逗号分隔。
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
