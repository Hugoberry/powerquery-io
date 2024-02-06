---
title: List.IsDistinct
---

# List.IsDistinct


指出清單中是否有重複項。


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

傳回邏輯值，指出清單 <code>list</code> 中是否有重複項。如果是相異的清單，即為 <code>true</code>，如果有重複值，則為 <code>false</code>。


## Examples

### Example #1 
找出清單 \{1, 2, 3} 是否為相異 (即沒有重複項)。no duplicates).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
找出清單 \{1, 2, 3, 3} 是否為相異 (即沒有重複項)。no duplicates).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
