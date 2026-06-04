---
title: List.PositionOfAny
---

# List.PositionOfAny


목록에 있는 값의 첫 번째 오프셋을 반환합니다.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

지정된 값 목록에서 항목이 목록에 표시되는 오프셋을 반환합니다. 검색된 항목이 없으면 -1을 반환합니다.

-   `list`: 검색할 목록입니다.
-   `values`: 원래 목록에서 찾을 값 목록입니다.
-   `occurrence`: (선택 사항) 보고할 특정 발생 항목입니다. 이 값은 `Occurrence.First`, `Occurrence.Last` 또는 `Occurrence.All`일 수 있습니다. 만약 `occurrence`이(가) 지정되지 않으면, `Occurrence.First`가 사용됩니다.
-   `equationCriteria`: (선택 사항) 값을 비교할 때 동등성이 결정되는 방식을 지정합니다. 이 매개 변수는 키 선택기 함수, 비교자 함수 또는 키 선택기와 비교자를 모두 포함하는 목록일 수 있습니다.


## Examples

### Example #1
\{1, 2, 3\} 목록에서 2 또는 3 값이 나타나는 첫 번째 위치를 찾습니다.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
2022년 또는 2023년 날짜의 모든 인스턴스 목록에서 위치를 찾습니다.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2025, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = {2022, 2023},
    FindPositions = List.PositionOfAny(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 2, 4}
```


### Example #3
대/소문자를 무시하고 단어 dog 또는 cat 중 하나가 마지막으로 나타난 위치를 목록에서 찾으세요.
```powerquery
let
    Source = List.PositionOfAny(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        {"dog", "cat"},
        Occurrence.Last,
        Comparer.OrdinalIgnoreCase
    )
in
    Source
```

Result: 
```powerquery
6
```


### Example #4
목록에서 숫자 17 또는 28의 두 단위 내에 있는 위치를 찾습니다.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOfAny(
        Source,
        {17, 28},
        Occurrence.All,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
{1, 4}
```




## Category
List.Membership functions
