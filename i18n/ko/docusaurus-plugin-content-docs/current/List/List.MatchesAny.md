---
title: List.MatchesAny
---

# List.MatchesAny


## Description

목록에 조건 함수를 충족하는 값이 하나라도 있는 경우 true를 반환합니다.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

<code>list</code> 목록에 조건 함수 <code>condition</code>을(를) 충족하는 값이 하나라도 있으면 <code>true</code>를 반환하고, 그렇지 않으면 <code>false</code>를 반환합니다.


## Examples

### Example #1 
\{9, 10, 11} 목록에 10보다 큰 값이 하나라도 있는지 확인합니다.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3} 목록에 10보다 큰 값이 하나라도 있는지 확인합니다.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
