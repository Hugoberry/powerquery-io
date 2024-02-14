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

Trả về một hồ sơ cho các cột trong <code>table</code>.<br />Thông tin sau được trả về cho mỗi cột (nếu có):<ul>  <li>tối thiểu</li>  <li>tối đa</li>  <li>trung bình</li>  <li>độ lệch chuẩn</li>  <li>số lượng</li>  <li>số lượng rỗng</li>  <li>số lượng phân biệt</li></ul><br />



## Category
Table.Information
