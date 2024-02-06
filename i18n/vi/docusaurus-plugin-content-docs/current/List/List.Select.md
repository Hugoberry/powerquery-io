---
title: List.Select
---

# List.Select


Trả về một danh sách giá trị phù hợp với điều kiện.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

Trả về một danh sách giá trị từ danh sách <code>list</code> khớp với điều kiện lựa chọn <code>selection</code>.


## Examples

### Example #1 
Tìm các giá trị trong danh sách \{1, -3, 4, 9, -2} lớn hơn 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
