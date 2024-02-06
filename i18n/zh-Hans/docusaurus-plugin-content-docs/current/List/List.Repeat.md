---
title: List.Repeat
---

# List.Repeat


返回作为原始列表指定次数的重复的列表。


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

返回作为原始列表 <code>list</code> 的 <code>count</code>次重复的列表。


## Examples

### Example #1 
创建将 \{1, 2} 重复 3 次得到的列表。
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
