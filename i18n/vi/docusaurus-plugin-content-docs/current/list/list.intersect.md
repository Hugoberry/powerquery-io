---
title: List.Intersect
---

# List.Intersect


Trả về giao điểm của các giá trị danh sách tìm được ở đầu vào.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Trả về giao điểm của các giá trị danh sách tìm được trong danh sách đầu vào `lists`. Có thể chỉ định tham số tùy chọn `equationCriteria`.


## Examples

### Example #1
Tìm giao điểm của các danh sách \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
