---
title: List.Union
---

# List.Union


## Description

Trả về tổ hợp giá trị danh sách tìm được trong đầu vào.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Lấy một danh sách chứa các danh sách <code>lists</code>, hợp nhất các mục trong các danh sách riêng lẻ và trả chúng về trong danh sách đầu ra. Kết quả là danh sách trả về chứa tất cả các mục trong mọi danh sách đầu ra.    Tác vụ này duy trì ngữ nghĩa túi lặp nên các giá trị trùng lặp có thể trùng khớp như một phần của Tập hợp.    Có thể chỉ định giá trị tiêu chí phương trình tùy chọn, <code>equationCriteria</code>, để kiểm soát việc kiểm tra đẳng thức. 


## Examples

### Example #1 
Tạo một tập hợp của danh sách \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
