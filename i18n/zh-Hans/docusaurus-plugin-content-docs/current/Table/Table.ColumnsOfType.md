---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

返回带有与指定类型相匹配的列名的列表。


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

返回带有与 <code>listOfTypes</code> 中指定的类型相匹配的表 <code>table</code> 中的列名的列表。


## Examples

### Example #1 
返回表中类型 Number.Type 的列名。
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
