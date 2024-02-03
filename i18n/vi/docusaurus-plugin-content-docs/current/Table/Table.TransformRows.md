---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Chuyển đổi các hàng của bảng bằng hàm chuyển đổi được chỉ định.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Tạo một <code>danh sách</code> bằng cách áp dụng phép toán <code>transform</code> cho từng hàng trong <code>table</code>.


## Examples

### Example #1 
Chuyển đổi các hàng của bảng thành một danh sách số.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
Chuyển đổi các hàng của bảng số thành hồ sơ dạng văn bản.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
