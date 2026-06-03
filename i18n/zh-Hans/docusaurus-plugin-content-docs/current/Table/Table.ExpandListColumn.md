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

给定 `table`，其中 `column` 包含一个值列表并将该列表拆分为每个值一行。其他列中的值在创建的每一个新行中都是重复的。此函数还可以通过将嵌套表视为记录列表来展开嵌套表。


## Examples

### Example #1
拆分列表列 \[名称\]。
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


### Example #2
拆分嵌套表列 \[组件\]。
```powerquery
Table.ExpandListColumn(
    #table(
        {"Part", "Components"},
        {
            {"Tool", #table({"Name", "Quantity"}, {{"Thingamajig", 2}, {"Widget", 3}})}
        }
    ),
    "Components"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Part = "Tool", Components = [Name = "Thingamajig", Quantity = 2]],
    [Part = "Tool", Components = [Name = "Widget", Quantity = 3]]
})
```




## Category
Table.Transformation
