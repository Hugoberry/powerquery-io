---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Trả về danh sách tên các cột phù hợp với những loại đã chỉ định.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Trả về danh sách tên các cột từ bảng <code>table</code> phù hợp với những loại được chỉ định trong <code>listOfTypes</code>.


## Examples

### Example #1 
Trả về tên các cột thuộc loại Number.Type từ bảng.
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
