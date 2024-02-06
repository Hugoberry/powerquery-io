---
title: List.MatchesAll
---

# List.MatchesAll


リスト内のすべての値によって条件関数が満たされる場合、true を返します。


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

リスト <code>list</code> 内のすべての値によって条件関数 <code>condition</code> が満たされる場合は <code>true</code>、それ以外の場合は <code>false</code> を返します。


## Examples

### Example #1 
リスト \{11, 12, 13} 内のすべての値が 10 を超えるかどうかを判断します。
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
リスト \{1, 2, 3} 内のすべての値が 10 を超えるかどうかを判断します。
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
