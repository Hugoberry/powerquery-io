---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Áp dụng mỗi lần thay thế \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Thực hiện các thay thế cho sẵn đối với danh sách <code>list</code>. Tác vụ thay thế <code>replacements</code> chứa một danh sách có hai giá trị, giá trị cũ và giá trị mới, được cung cấp trong một danh sách.    Có thể chỉ định giá trị tiêu chí phương trình tùy chọn, <code>equationCriteria</code>, để kiểm soát việc kiểm tra đẳng thức.


## Examples

### Example #1 
Tạo một danh sách từ \{1, 2, 3, 4, 5} thay thế giá trị 5 bằng -5 và giá trị 1 bằng -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
