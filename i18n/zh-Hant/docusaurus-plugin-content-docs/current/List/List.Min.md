---
title: List.Min
---

# List.Min


## Description

傳回最小值，或針對空的清單傳回預設值。


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

傳回清單 <code>list</code> 中最小的項目，如果清單是空的，則傳回選擇性的預設值 <code>default</code>。    可指定選擇性的 comparisonCriteria 值 <code>comparisonCriteria</code>，以決定清單中項目的比較方式。如果這個參數是 null，則使用預設比較子。


## Examples

### Example #1 
找出清單 \{1, 4, 7, 3, -2, 5} 中的最小值。
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
找出清單 \{} 中的最小值，如果是空的，則為 -1。
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
