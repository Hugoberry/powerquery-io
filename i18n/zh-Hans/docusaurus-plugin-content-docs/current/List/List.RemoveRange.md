---
title: List.RemoveRange
---

# List.RemoveRange


从指定的位置开始删除指定数目的值。


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

在 <code>list</code> 中删除从指定的位置 <code>index</code> 开始的 <code>count</code> 个值。


## Examples

### Example #1 
在列表 \{1, 2, 3, 4, -6, -2, -1, 5} 中删除从索引 4 开始的 3 个值。
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
