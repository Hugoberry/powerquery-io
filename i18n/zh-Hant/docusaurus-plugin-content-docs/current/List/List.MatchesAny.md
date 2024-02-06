---
title: List.MatchesAny
---

# List.MatchesAny


如果有任何值符合條件函數，即傳回 True。


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

如果清單 <code>list</code> 中的任何值符合條件函數 <code>condition</code>，即傳回 <code>true</code>，否則傳回 <code>false</code>。


## Examples

### Example #1 
找出清單 \{9, 10, 11} 中是否有任何值大於 10。
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
找出清單 \{1, 2, 3} 中是否有任何值大於 10。
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
