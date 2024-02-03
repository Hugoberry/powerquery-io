---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Loại bỏ tất cả những lần xuất hiện của giá trị đầu vào.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Loại bỏ tất cả những lần xuất hiện của giá trị cụ thể trong <code>list2</code> khỏi danh sách <code>list1</code>. Nếu các giá trị trong <code>list2</code> không tồn tại trong <code>list1</code> thì danh sách ban đầu được trả về.    Có thể chỉ định giá trị tiêu chí phương trình tùy chọn, <code>equationCriteria</code>, để kiểm soát việc kiểm tra đẳng thức. 


## Examples

### Example #1 
Tạo một danh sách từ \{1, 2, 3, 4, 5, 5} không có \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
