---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


移除輸入值的所有發生次數。


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

從清單 `list1` 中移除 `list2` 中指定之值的所有出現次數。如果 `list2` 中的值不存在 `list1` 中，則傳回原始清單。 可指定選擇性的等式條件值 `equationCriteria`，以控制等號比較測試。


## Examples

### Example #1
根據 \{1, 2, 3, 4, 5, 5\} 建立不含 \{1, 5\} 的清單。
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
