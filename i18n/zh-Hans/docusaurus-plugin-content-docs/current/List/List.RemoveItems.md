---
title: List.RemoveItems
---

# List.RemoveItems


从 list1 中删除在列表中出现的项。


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

从 <code>list1</code> 中删除 <code>list2</code> 中所有出现的给定值。如果 <code>list2</code> 中的值在 <code>list1</code> 中不存在，则返回原始列表。


## Examples

### Example #1 
从列表 \{1, 2, 3, 4, 2, 5, 5} 中删除在列表 \{2, 4, 6} 中出现的项。
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
