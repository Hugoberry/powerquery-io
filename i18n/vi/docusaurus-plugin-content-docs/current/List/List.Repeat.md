---
title: List.Repeat
---

# List.Repeat


## Description

Trả về một danh sách tính tổng lần lặp của danh sách gốc.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Trả về một danh sách là <code>count</code> lần lặp của danh sách gốc <code>list</code>.


## Examples

### Example #1 
Tạo một danh sách có \{1, 2} được lặp lại 3 lần.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
