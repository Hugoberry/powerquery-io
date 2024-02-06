---
title: List.RemoveRange
---

# List.RemoveRange


Loại bỏ tính số lượng giá trị bắt đầu tại một vị trí được chỉ định.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Loại bỏ <code>count</code> giá trị trong <code>list</code> bắt đầu tại vị trí được chỉ định, <code>index</code>.


## Examples

### Example #1 
Loại bỏ 3 giá trị trong danh sách \{1, 2, 3, 4, -6, -2, -1, 5} bắt đầu tại chỉ mục 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
