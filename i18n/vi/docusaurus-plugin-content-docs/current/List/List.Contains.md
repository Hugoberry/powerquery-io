---
title: List.Contains
---

# List.Contains


## Description

Cho biết danh sách có chứa giá trị không.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Cho biết danh sách <code>list</code> có chứa giá trị <code>value</code> hay không.    Trả về true nếu tìm thấy giá trị trong danh sách, false nếu ngược lại. Có thể chỉ định giá trị tiêu chí phương trình tùy chọn, <code>equationCriteria</code>, để kiểm soát việc kiểm tra đẳng thức. 


## Examples

### Example #1 
Tìm ra danh sách \{1, 2, 3, 4, 5} có chứa 3 hay không.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Tìm ra danh sách \{1, 2, 3, 4, 5} có chứa 6 hay không.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
