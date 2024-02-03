---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Loại bỏ các mục trong danh list1 có trong danh sách.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Loại bỏ tất cả những lần xuất hiện của giá trị cụ thể trong <code>list2</code> khỏi <code>list1</code>. Nếu các giá trị trong <code>list2</code> không tồn tại trong <code>list1</code> thì danh sách ban đầu được trả về.


## Examples

### Example #1 
Loại bỏ các mục trong danh sách \{2, 4, 6} từ danh sách \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
