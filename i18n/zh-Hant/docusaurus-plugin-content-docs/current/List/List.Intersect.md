---
title: List.Intersect
---

# List.Intersect


## Description

傳回出現在輸入中的清單值交集。


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

傳回出現在輸入清單 <code>lists</code> 中的清單值交集。可指定選擇性參數 <code>equationCriteria</code>。


## Examples

### Example #1 
找出清單 \{1..5}、\{2..6}、\{3..7} 的交集。
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
