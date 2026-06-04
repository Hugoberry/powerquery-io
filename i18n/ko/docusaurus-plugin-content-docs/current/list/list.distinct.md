---
title: List.Distinct
---

# List.Distinct


중복 값이 제거된 값 목록을 반환합니다.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

지정한 목록에서 중복 항목이 제거된 모든 값을 포함하는 목록을 반환합니다. 지정한 목록이 비어 있으면 결과는 빈 목록입니다.

-   `list`: 고유한 값이 추출되는 목록입니다.
-   `equationCriteria`: (선택 사항) 값을 비교할 때 동등성이 결정되는 방식을 지정합니다. 이 매개 변수는 키 선택기 함수, 비교자 함수 또는 키 선택기와 비교자를 모두 포함하는 목록일 수 있습니다.


## Examples

### Example #1
\{1, 1, 2, 3, 3, 3\} 목록에서 중복 항목을 제거합니다.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
목록의 끝 부분에서부터 텍스트 길이가 고유한 과일을 선택합니다.
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
목록의 시작 부분에서부터 대소문자를 무시하고 고유한 과일을 선택합니다.
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
대소문자를 무시하고 고유한 국가 이름을 가진 첫 번째 목록을 목록에서 추출합니다. 추출된 목록을 새 테이블의 행에 배치합니다.
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection
