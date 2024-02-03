---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Thêm cột vào cube chứa kết quả của phép đo được áp dụng trong ngữ cảnh hàng của mỗi hàng.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Thêm cột có tên <code>column</code> vào <code>cube</code> chứa kết quả của phép đo <code>measureSelector</code> được áp dụng trong ngữ cảnh hàng của mỗi hàng. Ứng dụng đo lường bị ảnh hưởng bởi các thay đổi đối với chi tiết kích thước và lát cắt. Giá trị đo lường sẽ được điều chỉnh sau khi các hoạt động cube nhất định được thực hiện.



## Category
Cube
