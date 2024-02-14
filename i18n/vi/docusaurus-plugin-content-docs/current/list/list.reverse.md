---
title: List.Reverse
---

# List.Reverse


Đảo ngược thứ tự giá trị trong danh sách.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Trả về một danh sách có các giá trị trong danh sách <code>list</code> theo thứ tự đảo ngược.


## Examples

### Example #1 
Tạo một danh sách từ \{1..10} theo thứ tự đảo ngược.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
