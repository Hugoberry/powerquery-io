---
title: List.MatchesAll
---

# List.MatchesAll


## Description

목록의 모든 값이 조건 함수를 충족하는 경우 true를 반환합니다.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

<code>list</code> 목록의 모든 값이 조건 함수 <code>condition</code>을(를) 충족하면 <code>true</code>를 반환하고, 그렇지 않으면 <code>false</code>를 반환합니다.


## Examples

### Example #1 
\{11, 12, 13} 목록의 모든 값이 10보다 큰지 여부를 확인합니다.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3} 목록의 모든 값이 10보다 큰지 여부를 확인합니다.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
