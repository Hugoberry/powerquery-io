---
title: List.MinN
---

# List.MinN


傳回清單中的最小值。可指定要傳回的值數目或篩選條件。


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

傳回清單 `list` 中的最小值。 參數 `countOrCondition` 指定要傳回的值數目或篩選條件。選擇性參數 `comparisonCriteria` 指定清單中值的比較方式。

-   `list`: 值清單。
-   `countOrCondition`: 如果指定了數字，就會依遞增順序傳回最多包含 `countOrCondition` 個項目的清單。如果指定了條件，就會傳回最初符合條件的項目清單。一旦有項目不符合條件，就不再考慮其他項目。如果這個參數是 null，則傳回清單中一個最小的值。
-   `comparisonCriteria`: *(選用)* 可指定選擇性 `comparisonCriteria` 值，以決定清單中項目的比較方式。如果這個參數是 null，則使用預設比較子。


## Examples

### Example #1
找出清單 `{3, 4, 5, -1, 7, 8, 2}` 中前 5 小的值。
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
