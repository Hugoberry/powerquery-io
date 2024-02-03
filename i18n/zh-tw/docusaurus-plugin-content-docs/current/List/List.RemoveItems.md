---
title: List.RemoveItems
---

# List.RemoveItems


## Description

從 list1 中移除出現在清單中的項目。


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

從 <code>list1</code> 中移除 <code>list2</code> 中指定之值的所有出現次數。如果 <code>list2</code> 中的值不存在 <code>list1</code> 中，則傳回原始清單。


## Examples

### Example #1 
從清單 \{1, 2, 3, 4, 2, 5, 5} 中移除清單 \{2, 4, 6} 中的項目。
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
