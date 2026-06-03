---
title: Table.Unpivot
---

# Table.Unpivot


Chuyển đổi tập hợp cột trong bảng thành các cặp thuộc tính-giá trị.


## Syntax

```powerquery
Table.Unpivot(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Remarks

Chuyển đổi tập hợp cột trong bảng thành các cặp thuộc tính-giá trị, kết hợp với các giá trị còn lại trong mỗi hàng.


## Examples

### Example #1
Lấy các cột "a", "b" và "c" trong bảng `({[ key = "x", a = 1, b = null, c = 3 ], [ key = "y", a = 2, b = 4, c = null ]})` và hủy xoay chúng thành các cặp thuộc tính-giá trị.
```powerquery
Table.Unpivot(
    Table.FromRecords({
        [key = "x", a = 1, b = null, c = 3],
        [key = "y", a = 2, b = 4, c = null]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", attribute = "a", value = 1],
    [key = "x", attribute = "c", value = 3],
    [key = "y", attribute = "a", value = 2],
    [key = "y", attribute = "b", value = 4]
})
```




## Category
Table.Column operations
