---
title: List.RemoveItems
---

# List.RemoveItems


Loại bỏ các mục trong danh list1 có trong danh sách.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Loại bỏ tất cả những lần xuất hiện của giá trị cụ thể trong `list2` khỏi `list1`. Nếu các giá trị trong `list2` không tồn tại trong `list1` thì danh sách ban đầu được trả về.


## Examples

### Example #1
Loại bỏ các mục trong danh sách \{2, 4, 6\} từ danh sách \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
