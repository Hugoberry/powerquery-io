---
title: List.MatchesAll
---

# List.MatchesAll


목록의 모든 값이 조건 함수를 충족하는 경우 true를 반환합니다.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

조건 함수가 목록의 모든 값에 만족하면 `true`를 반환하고, 그렇지 않으면 `false` 반환합니다.

-   `list`: 확인할 값이 포함된 목록입니다.
-   `condition`: 목록의 값에서 확인해야 하는 조건입니다.


## Examples

### Example #1
\{11, 12, 13\} 목록의 모든 값이 10보다 큰지 여부를 확인합니다.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3\} 목록의 모든 값이 10보다 큰지 여부를 확인합니다.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
대/소문자를 무시하면서 목록의 모든 텍스트 값에 "anna"가 포함되어 있는지 확인합니다.
```powerquery
let
    Source = {"Savannah", "Annabelle", "Annals", "wannabe", "MANNA"},
    Result = List.MatchesAll(Source, each Text.Contains(_, "anna", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
모든 날짜에 2021년이 포함되어 있는지 확인합니다.
```powerquery
let
    Source = {#date(2021, 11, 28), #date(2021, 1, 14), #date(2021, 12, 31), #date(2021, 7, 6)},
    Result = List.MatchesAll(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
