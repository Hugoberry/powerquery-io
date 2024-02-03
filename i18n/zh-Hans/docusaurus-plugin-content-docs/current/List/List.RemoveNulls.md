---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

从指定的列表中删除所有 &#34;null&#34; 值。


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

在 <code>list</code> 中删除所有出现的 "null" 值。如果列表中没有 "null" 值，则返回原始列表。


## Examples

### Example #1 
从列表 \{1, 2, 3, null, 4, 5, null, 6} 中删除 &#34;null&#34; 值。
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
