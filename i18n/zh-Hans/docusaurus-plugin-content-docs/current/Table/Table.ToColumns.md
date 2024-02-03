---
title: Table.ToColumns
---

# Table.ToColumns


## Description

从表中创建列值的嵌套列表的列表。


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

从表 <code>table</code> 中创建嵌套表的列表。 每个列表项都是一个包含列值的内部列表。


## Examples

### Example #1 
从表中创建列值的列表。
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
