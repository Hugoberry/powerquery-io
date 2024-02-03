---
title: List.Difference
---

# List.Difference


## Description

Trả về chênh lệch giữa hai danh sách cho sẵn.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Trả về các mục trong danh sách <code>list1</code> không xuất hiện trong danh sách <code>list2</code>. Các giá trị trùng lặp được hỗ trợ.    Có thể chỉ định giá trị tiêu chí phương trình tùy chọn, <code>equationCriteria</code>, để kiểm soát việc kiểm tra đẳng thức. 


## Examples

### Example #1 
Tìm các mục trong danh sách \{1, 2, 3, 4, 5} không xuất hiện trong \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Tìm các mục trong danh sách \{1, 2} không xuất hiện trong \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
