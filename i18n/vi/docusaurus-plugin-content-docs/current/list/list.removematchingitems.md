---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Loại bỏ tất cả những lần xuất hiện của giá trị đầu vào.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Loại bỏ tất cả những lần xuất hiện của giá trị cụ thể trong `list2` khỏi danh sách `list1`. Nếu các giá trị trong `list2` không tồn tại trong `list1` thì danh sách ban đầu được trả về. Có thể chỉ định giá trị tiêu chí phương trình tùy chọn, `equationCriteria`, để kiểm soát việc kiểm tra đẳng thức.


## Examples

### Example #1
Tạo một danh sách từ \{1, 2, 3, 4, 5, 5\} không có \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
