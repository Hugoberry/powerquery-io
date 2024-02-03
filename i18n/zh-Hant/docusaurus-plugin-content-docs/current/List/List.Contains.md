---
title: List.Contains
---

# List.Contains


## Description

指出清單是否包含值。


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

指出清單 <code>list</code> 是否包含值 <code>value</code>。    如果在清單中找到值，即傳回 True，否則傳回 False。您可指定選擇性的方程式條件值 <code>equationCriteria</code>，以控制等號比較測試。 


## Examples

### Example #1 
找出清單 \{1, 2, 3, 4, 5} 是否包含 3。
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
找出清單 \{1, 2, 3, 4, 5} 是否包含 6。
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
