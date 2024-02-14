---
title: List.Zip
---

# List.Zip


Trả về danh sách các danh sách bằng cách kết hợp các mục ở cùng một vị trí trong nhiều danh sách.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Remarks

Lấy danh sách các danh sách, <code>lists</code> và trả về danh sách các danh sách kết hợp các mục ở cùng một vị trí.


## Examples

### Example #1 
Nén hai danh sách đơn giản \{1, 2} và \{3, 4}.
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
Nén hai danh sách đơn giản có độ dài khác nhau \{1, 2} và \{3}.
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
