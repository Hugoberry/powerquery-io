---
title: List.ContainsAny
---

# List.ContainsAny


목록에 다른 목록의 값이 하나라도 포함되어 있는지 여부를 나타냅니다.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

목록에 다른 목록의 값이 포함되어 있는지 여부를 나타냅니다. 값이 목록에 있으면 `true`를 반환하고, 그렇지 않으면 `false` 반환합니다.

-   `list`: 검색할 목록입니다.
-   `values`: 첫 번째 목록에서 검색할 값 목록입니다.
-   `equationCriteria`: (선택 사항) 두 값이 같은지 확인하는 데 사용되는 비교자입니다.


## Examples

### Example #1
\{1, 2, 3, 4, 5\} 목록에 3 또는 9가 포함되어 있는지 확인합니다.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3, 4, 5\} 목록에 6 또는 7이 포함되어 있는지 확인합니다.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
대/소문자를 무시하면서 목록에 말이나 나무가 포함되어 있는지 확인합니다.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
목록에 2022년 4월 8일 또는 2021년 1월 12일의 날짜가 포함되어 있는지 확인합니다.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
