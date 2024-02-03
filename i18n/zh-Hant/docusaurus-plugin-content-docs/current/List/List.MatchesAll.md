---
title: List.MatchesAll
---

# List.MatchesAll


## Description

如果清單中的所有值都符合條件函數，即傳回 True。


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

如果清單 <code>list</code> 中的所有值都符合條件函數 <code>condition</code>，即傳回 <code>true</code>，否則傳回 <code>false</code>。


## Examples

### Example #1 
判斷清單 \{11, 12, 13} 中是否所有值都大於 10。
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
判斷清單 \{1, 2, 3} 中是否所有值都大於 10。
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
