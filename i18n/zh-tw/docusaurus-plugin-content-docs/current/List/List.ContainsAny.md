---
title: List.ContainsAny
---

# List.ContainsAny


## Description

指出清單是否包含另一個清單中的任何值。


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

指出清單 <code>list</code> 是否包含另一個清單 <code>values</code> 中的任何值。        如果在清單中找到值，即傳回 True，否則傳回 False。可指定選擇性的等式條件值 <code>equationCriteria</code>，以控制等號比較測試。


## Examples

### Example #1 
找出清單 \{1, 2, 3, 4, 5} 是否包含 3 或 9。
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
找出清單 \{1, 2, 3, 4, 5} 是否包含 6 或 7。
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
