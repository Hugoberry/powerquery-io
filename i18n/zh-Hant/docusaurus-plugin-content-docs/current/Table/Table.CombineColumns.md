---
title: Table.CombineColumns
---

# Table.CombineColumns


使用指定的結合子函數，將指定的資料行結合成新的資料行。


## Syntax

```powerquery
Table.CombineColumns(
    table as table,
    sourceColumns as list,
    combiner as function,
    column as text
) as table
```


## Remarks

使用指定的結合子函數，將指定的資料行結合成新的資料行。


## Examples

### Example #1 
將姓和名合併至新資料行中，用逗號分隔。
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
