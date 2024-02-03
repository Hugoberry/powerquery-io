---
title: List.Transform
---

# List.Transform


## Description

Trả về một danh sách mới chứa các giá trị được tính từ danh sách này.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Trả về một danh sách giá trị mới bằng cách áp dụng hàm chuyển đổi <code>transform</code> cho danh sách <code>list</code>.


## Examples

### Example #1 
Thêm 1 vào từng giá trị trong danh sách \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
