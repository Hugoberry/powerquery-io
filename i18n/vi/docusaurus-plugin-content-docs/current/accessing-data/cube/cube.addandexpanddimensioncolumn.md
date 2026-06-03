---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Hợp nhất bảng kích thước được chỉ định với ngữ cảnh bộ lọc của cube và thay đổi độ chi tiết kích thước của ngữ cảnh bộ lọc bằng cách mở rộng tập hợp thuộc tính kích thước được chỉ định.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Remarks

Hợp nhất bảng kích thước được chỉ định `dimensionSelector` với ngữ cảnh bộ lọc của `cube` và thay đổi chi tiết kích thước bằng cách mở rộng tập hợp thuộc tính kích thước được chỉ định `attributeNames`. Thuộc tính kích thước được thêm vào chế độ xem dạng bảng với cột có tên `newColumnNames` hoặc `attributeNames` nếu không được chỉ định.



## Category
Cube
