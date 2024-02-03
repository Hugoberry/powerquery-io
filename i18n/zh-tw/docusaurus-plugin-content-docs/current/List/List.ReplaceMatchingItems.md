---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

套用 \{ old, new } 的每個取代。


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

對清單 <code>list</code> 執行指定的取代。取代作業 <code>replacements</code> 是由清單中提供的兩個值 (舊值和新值) 清單組成。    可指定選擇性的等式條件值 <code>equationCriteria</code>，以控制等號比較測試。


## Examples

### Example #1 
根據 \{1, 2, 3, 4, 5} 建立清單，並將值 5 以 -5 取代，值 1 則以 -1 取代。
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
