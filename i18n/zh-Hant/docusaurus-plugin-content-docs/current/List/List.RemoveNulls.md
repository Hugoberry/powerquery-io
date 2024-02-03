---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

從指定的清單移除所有 &#34;null&#34; 值。


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

移除 <code>list</code> 中所有發生的 "null" 值。如果清單中沒有 'null' 值，則傳回原始清單。


## Examples

### Example #1 
從清單 \{1, 2, 3, null, 4, 5, null, 6} 移除 &#34;null&#34; 值。
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
