---
title: List.MatchesAny
---

# List.MatchesAny


목록에 조건 함수를 충족하는 값이 하나라도 있는 경우 true를 반환합니다.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

조건 함수가 목록의 값에 만족하면 `true`를 반환하고, 그렇지 않으면 `false` 반환합니다.

-   `list`: 확인할 값이 포함된 목록입니다.
-   `condition`: 목록의 값에서 확인해야 하는 조건입니다.


## Examples

### Example #1
\{9, 10, 11\} 목록의 값이 10보다 큰지 확인합니다.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3\} 목록의 값이 10보다 큰지 확인합니다.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
대/소문자를 무시하면서 목록의 모든 텍스트 값에 "cat"이 포함되어 있는지 확인합니다.
```powerquery
let
    Source = {"A Brown Fox", "A Loyal Dog", "A Curious Cat", "A Wild Horse", "A Rascally Rabbit"},
    Result = List.MatchesAny(Source, each Text.Contains(_, "cat", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
날짜 중 2021년도를 포함하는 날짜가 있는지 확인합니다.
```powerquery
let
    Source = {#date(2024, 11, 28), #date(2023, 1, 14), #date(2021, 12, 31), #date(2025, 7, 6)},
    Result = List.MatchesAny(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
