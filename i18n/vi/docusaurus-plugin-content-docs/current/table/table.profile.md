---
title: Table.Profile
---

# Table.Profile


Trả về một hồ sơ gồm các cột trong một bảng.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Trả về một hồ sơ cho các cột trong `table`.

Thông tin sau được trả về cho mỗi cột (nếu có):

-   tối thiểu
-   tối đa
-   trung bình
-   độ lệch chuẩn
-   số lượng
-   số lượng rỗng
-   số lượng phân biệt



## Category
Table.Information
