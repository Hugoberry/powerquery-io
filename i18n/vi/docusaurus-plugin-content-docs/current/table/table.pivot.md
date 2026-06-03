---
title: Table.Pivot
---

# Table.Pivot


Cho một cặp cột biểu thị cặp thuộc tính-giá trị, hãy xoay dữ liệu trong cột thuộc tính thành tiêu đề cột.


## Syntax

```powerquery
Table.Pivot(
    table as table,
    pivotValues as list,
    attributeColumn as text,
    valueColumn as text,
    optional aggregationFunction as function
) as table
```


## Remarks

Cho một cặp cột biểu thị cặp thuộc tính-giá trị, hãy xoay dữ liệu trong cột thuộc tính thành tiêu đề cột.


## Examples

### Example #1
Lấy giá trị "a", "b" và "c" trong cột thuộc tính của bảng `({ [ key = "x", attribute = "a", value = 1 ], [ key = "x", attribute = "c", value = 3 ], [ key = "y", attribute = "a", value = 2 ], [ key = "y", attribute = "b", value = 4 ] })` và xoay các giá trị này thành cột riêng của chúng.
```powerquery
Table.Pivot(
    Table.FromRecords({
        [key = "x", attribute = "a", value = 1],
        [key = "x", attribute = "c", value = 3],
        [key = "y", attribute = "a", value = 2],
        [key = "y", attribute = "b", value = 4]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", a = 1, b = null, c = 3],
    [key = "y", a = 2, b = 4, c = null]
})
```


### Example #2
Lấy giá trị "a", "b" và "c" trong cột thuộc tính của bảng `({ [ key = "x", attribute = "a", value = 1 ], [ key = "x", attribute = "c", value = 3 ], [ key = "x", attribute = "c", value = 5 ], [ key = "y", attribute = "a", value = 2 ], [ key = "y", attribute = "b", value = 4 ] })` và xoay các giá trị này thành cột riêng của chúng. Thuộc tính "c" cho khóa "x" có nhiều giá trị liên kết đi kèm nên hãy sử dụng hàm List.Max để giải quyết xung đột.
```powerquery
Table.Pivot(
    Table.FromRecords({
        [key = "x", attribute = "a", value = 1],
        [key = "x", attribute = "c", value = 3],
        [key = "x", attribute = "c", value = 5],
        [key = "y", attribute = "a", value = 2],
        [key = "y", attribute = "b", value = 4]
    }),
    {"a", "b", "c"},
    "attribute",
    "value",
    List.Max
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", a = 1, b = null, c = 5],
    [key = "y", a = 2, b = 4, c = null]
})
```




## Category
Table.Column operations
