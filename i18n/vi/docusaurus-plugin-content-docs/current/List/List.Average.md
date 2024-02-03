---
title: List.Average
---

# List.Average


## Description

Trả về giá trị trung bình của các giá trị. Hoạt động với giá trị số, ngày, ngày giờ, múi giờ ngày và khoảng thời gian.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Trả về giá trị trung bình cho các mục trong danh sách, <code>list</code>. Kết quả được cho có cùng loại dữ liệu như các giá trị trong danh sách. Chỉ hoạt động với số, ngày, giờ, ngày giờ, múi giờ ngày và khoảng thời gian.    Nếu danh sách trống thì giá trị rỗng được trả về.


## Examples

### Example #1 
Tìm giá trị trung bình của danh sách số, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Tìm giá trị trung bình của các giá trị ngày: Ngày 1 tháng 1 năm 2011, Ngày 2 tháng 2 năm 2012 và Ngày 3 tháng 3 năm 2013.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
