---
title: List.RemoveRange
---

# List.RemoveRange


## Description

從指定的位置開始，移除某計數的值。


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

從指定的位置 <code>index</code> 開始，移除 <code>list</code> 中的 <code>count</code> 個值。


## Examples

### Example #1 
從索引 4 開始，移除清單 \{1, 2, 3, 4, -6, -2, -1, 5} 中的 3 個值。
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
