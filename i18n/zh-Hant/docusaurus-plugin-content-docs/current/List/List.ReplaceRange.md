---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

將某位置開始、某計數的值以取代值取代。


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

將 <code>list</code> 中的 <code>count</code> 個值以清單 <code>replaceWith</code> 取代，從指定的位置開始 <code>index</code>。


## Examples

### Example #1 
將清單 \{1, 2, 7, 8, 9, 5} 中的 \{7, 8, 9} 以 \{3, 4} 取代。
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
