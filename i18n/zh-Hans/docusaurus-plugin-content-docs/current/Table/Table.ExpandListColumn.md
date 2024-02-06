---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


给定表中的列表列之后，为其列表中的每个值创建行的副本。


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

给定 <code>table</code> 后(其中 <code>column</code> 是值列表)，针对每个值将列表拆分为一行。将在每个创建的新行中复制其他列的值。


## Examples

### Example #1 
拆分表中的列表列 [Name]。
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
