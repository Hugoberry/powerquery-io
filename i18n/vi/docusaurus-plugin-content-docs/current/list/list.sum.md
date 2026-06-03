---
title: List.Sum
---

# List.Sum


Trả về tổng cộng các mục trong danh sách.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Trả về tổng của các giá trị không rỗng trong danh sách `list`. Trả về giá trị rỗng nếu không có giá trị nào trong danh sách là giá trị không rỗng.


## Examples

### Example #1
Tìm tổng của các số trong danh sách `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
