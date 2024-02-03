---
title: Table.Column
---

# Table.Column


## Description

将表中指定的数据列返回为列表。


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

将表 <code>table</code> 中由 <code>column</code> 指定的数据列返回为列表。


## Examples

### Example #1 
返回表中 [Name] 列的值。
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
