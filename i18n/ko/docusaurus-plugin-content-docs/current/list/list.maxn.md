---
title: List.MaxN
---

# List.MaxN


목록의 최대값을 반환합니다. 반환할 값의 수 또는 필터 조건을 지정해야 합니다.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

지정된 목록의 최대값을 반환합니다. 행을 정렬한 후 선택적 매개 변수를 지정하여 결과를 추가로 필터링할 수 있습니다.

-   `list`: 값 목록입니다.
-   `countOrCondition`: 반환할 값 수 또는 필터 조건을 지정합니다. 숫자를 지정하면 내림차순으로 최대 `countOrCondition`개의 항목으로 구성된 목록이 반환됩니다. 조건을 지정하면 반환된 목록에 조건을 충족하는 모든 항목이 포함됩니다.
-   `comparisonCriteria`: (선택 사항) 값을 비교하기 전에 변환하는 데 사용되는 함수입니다. 이 매개 변수가 `null`이면 변환 없이 값을 비교합니다.
-   `includeNulls`: (선택 사항) 목록의 `null` 값을 최대 항목 결정에 포함할지 여부를 나타냅니다. 기본값은 `true`입니다.


## Examples

### Example #1
지정된 목록에서 상위 5개 값을 찾습니다.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
3자 이상의 단어를 찾습니다.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
독일어 날짜 목록에서 가장 최근 날짜 3개를 찾습니다.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
