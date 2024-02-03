---
title: List.MatchesAny
---

# List.MatchesAny


## Description

いずれかの値によって条件関数が満たされる場合、true を返します。


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

リスト <code>list</code> 内のいずれかの値によって条件関数 <code>condition</code> が満たされる場合は <code>true</code>、それ以外の場合は <code>false</code> を返します。


## Examples

### Example #1 
リスト \{9, 10, 11} 内のいずれかの値が 10 を超えるかどうかを調べます。
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
リスト \{1, 2, 3} 内のいずれかの値が 10 を超えるかどうかを調べます。
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
