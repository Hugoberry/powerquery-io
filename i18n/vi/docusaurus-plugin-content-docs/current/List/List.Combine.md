---
title: List.Combine
---

# List.Combine


## Description

Trả về một danh sách duy nhất bằng cách kết hợp nhiều danh sách.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Lấy một danh sách bao gồm các danh sách <code>lists</code> và hợp nhất các danh sách đó thành một danh sách mới.


## Examples

### Example #1 
Kết hợp hai danh sách đơn giản \{1, 2} và \{3, 4}.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Kết hợp hai danh sách \{1, 2} và \{3, \{4, 5}}, một trong hai danh sách đó chứa một danh sách lồng nhau.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
