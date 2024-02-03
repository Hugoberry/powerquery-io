---
title: Table.AddKey
---

# Table.AddKey


## Description

向表添加键。


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

向 <code>table</code> 添加一个键，其中 <code>columns</code> 是定义该键的列名称列表，<code>isPrimary</code> 指定该键是否为主键。


## Examples

### Example #1 
向表添加单列主键。
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    resultTable = Table.AddKey(table, {"Id"}, true)
in
    resultTable
```

Result: 
```powerquery
Table.FromRecords({
    [Id = 1, Name = "Hello There"],
    [Id = 2, Name = "Good Bye"]
})
```




## Category
Table.Transformation
