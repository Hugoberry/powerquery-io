---
title: List.Reverse
---

# List.Reverse


## Description

将列表中的值反向排序。


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

返回将列表 <code>list</code> 中的值反向排序得到的列表。


## Examples

### Example #1 
通过将 \{1..10} 反向排序创建一个列表。
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
