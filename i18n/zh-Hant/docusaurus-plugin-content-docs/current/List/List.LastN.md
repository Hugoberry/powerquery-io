---
title: List.LastN
---

# List.LastN


傳回指定清單中最後一個或多個項目。可選擇性地指定要傳回的值數目或限定條件。


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

傳回指定清單中最後一個或多個項目。

-   `list`: 要檢查的清單。若清單為空，則傳回空清單。
-   `countOrCondition`: (選用) 支援收集多個項目或篩選項目。雖然此參數列為選用，但若未提供此值或為 `null`，將會發生錯誤。此參數可用兩種方式指定:
    -   如果指定數字，則會傳回最多該數量的項目。
    -   如果指定條件，則從清單末端開始，傳回所有符合條件的項目。一旦項目不符合條件，後續項目將不再考慮。


## Examples

### Example #1
找出清單 \{3, 4, 5, -1, 7, 8, 2\} 中的最後一個值。
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
找出清單 \{3, 4, 5, -1, 7, 8, 2\} 中大於 0 的最後一個值。
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
