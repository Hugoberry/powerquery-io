---
title: List.Max
---

# List.Max


최대값을 반환하거나, 빈 목록의 경우 기본값을 반환합니다.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

목록의 최대 항목을 반환하거나 목록이 비어 있는 경우 선택적 기본값을 반환합니다.

-   `list`: 값 목록입니다.
-   `default`: (선택 사항) 목록이 비어 있는 경우 반환할 값입니다.
-   `comparisonCriteria`: (선택 사항) 값을 비교하기 전에 변환하는 데 사용되는 함수입니다. 이 매개 변수가 `null`이면 변환 없이 값을 비교합니다.
-   `includeNulls`: (선택 사항) 목록의 `null` 값을 최대 항목 결정에 포함할지 여부를 나타냅니다. 기본값은 `true`입니다.


## Examples

### Example #1
지정된 목록에서 최대값을 찾습니다.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
지정된 목록에서 최대값을 찾거나 비어 있으면 -1을 반환합니다.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
텍스트 값 목록에서 알파벳 순으로 마지막에 오는 항목을 찾습니다. 목록이 비어 있으면 "none"을 반환합니다.
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
독일어 날짜 목록에서 가장 최근 날짜를 찾습니다. 목록이 비어 있으면 2000년 1월 1일을 반환합니다.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
