---
title: List.ReplaceRange
---

# List.ReplaceRange


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


## Remarks

將 `list` 中的 `count` 個值以清單 `replaceWith` 取代，從指定的位置開始 `index`。


## Examples

### Example #1
將清單 \{1, 2, 7, 8, 9, 5\} 中的 \{7, 8, 9\} 以 \{3, 4\} 取代。
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
