---
title: List.Buffer
---

# List.Buffer


Tải danh sách.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Remarks

Tải danh sách <code>list</code> trong bộ nhớ. Kết quả của lệnh gọi này là một danh sách ổn định.


## Examples

### Example #1 
Tạo một bảng ổn định của danh sách \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
