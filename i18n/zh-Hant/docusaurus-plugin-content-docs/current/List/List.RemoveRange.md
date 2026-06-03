---
title: List.RemoveRange
---

# List.RemoveRange


從指定的位置開始，移除某計數的值。


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

從指定的位置 `index` 開始，移除 `list` 中的 `count` 個值。


## Examples

### Example #1
從索引 4 開始，移除清單 \{1, 2, 3, 4, -6, -2, -1, 5\} 中的 3 個值。
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
