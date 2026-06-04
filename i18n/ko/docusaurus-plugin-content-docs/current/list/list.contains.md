---
title: List.Contains
---

# List.Contains


목록에 값이 포함되어 있는지 여부를 나타냅니다.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

목록에 지정된 값이 포함되어 있는지 여부를 나타냅니다. 값이 목록에 있으면 `true`를 반환하고, 그렇지 않으면 `false` 반환합니다.

-   `list`: 검색할 목록입니다.
-   `value`: 목록에서 검색할 값입니다.
-   `equationCriteria`: (선택 사항) 두 값이 같은지 확인하는 데 사용되는 비교자입니다.


## Examples

### Example #1
\{1, 2, 3, 4, 5\} 목록에 3이 포함되어 있는지 확인합니다.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3, 4, 5\} 목록에 6이 포함되어 있는지 확인합니다.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
대/소문자를 무시하고 목록에 "rhubarb"가 포함되어 있는지 확인합니다.
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
목록에 2022년 4월 8일 날짜가 포함되어 있는지 확인합니다.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
