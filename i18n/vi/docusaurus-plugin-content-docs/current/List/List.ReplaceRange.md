---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Thay thế tổng số các giá trị bắt đầu tại vị trí bằng các giá trị thay thế.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

Thay thế <code>count</code> giá trị trong <code>list</code> bằng danh sách <code>replaceWith</code>, bắt đầu tại vị trí cụ thể là <code>index</code>.


## Examples

### Example #1 
Thay thế \{7, 8, 9} trong danh sách \{1, 2, 7, 8, 9, 5} bằng \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
