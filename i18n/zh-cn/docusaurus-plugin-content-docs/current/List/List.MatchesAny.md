---
title: List.MatchesAny
---

# List.MatchesAny


## Description

如果任意值满足条件函数，则返回 true。


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

如果列表 <code>list</code> 中的任意值满足条件函数 <code>condition</code>，则返回 <code>true</code>；否则返回 <code>false</code>。


## Examples

### Example #1 
查看列表 \{9, 10, 11} 中的任意值是否大于 10。
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
查看列表 \{1, 2, 3} 中的任意值是否大于 10。
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
