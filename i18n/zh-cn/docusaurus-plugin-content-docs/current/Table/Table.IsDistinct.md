---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

指示表是否仅包含非重复行(没有重复项)。


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

指示 <code>table</code> 是否仅包含非重复行(没有重复项)。如果行为非重复行，则返回 <code>true</code>；否则返回 <code>false</code>。    可选参数 <code>comparisonCriteria</code> 指定对表中的哪些列进行测试以确定是否具有重复项。如果未指定 <code>comparisonCriteria</code>，则测试所有列。


## Examples

### Example #1 
确定表是否为非重复表。
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
确定表的列中是否非重复。
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
