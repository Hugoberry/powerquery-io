---
title: List.ContainsAny
---

# List.ContainsAny


Cho biết nơi một danh sách bao gồm bất kỳ giá trị nào trong số các giá trị trong một danh sách khác.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Cho biết danh sách <code>list</code> có bao gồm bất kỳ giá trị nào trong số các giá trị trong một danh sách khác, <code>values</code>, hay không.        Trả về true nếu tìm thấy giá trị trong danh sách, false nếu ngược lại. Có thể chỉ định giá trị tiêu chí phương trình tùy chọn, <code>equationCriteria</code>, để kiểm soát việc kiểm tra đẳng thức. 


## Examples

### Example #1 
Tìm ra danh sách \{1, 2, 3, 4, 5} có chứa 3 hoặc 9 hay không.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Tìm ra danh sách \{1, 2, 3, 4, 5} có chứa 6 hoặc 7 hay không.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
