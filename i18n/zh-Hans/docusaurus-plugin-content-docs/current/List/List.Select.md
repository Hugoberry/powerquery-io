---
title: List.Select
---

# List.Select


## Description

返回匹配条件的值列表。


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

从列表 <code>list</code> 返回匹配选择条件 <code>selection</code> 的值列表。


## Examples

### Example #1 
查找列表 \{1, -3, 4, 9, -2} 中大于 0 的值。
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
