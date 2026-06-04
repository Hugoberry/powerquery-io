---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


특정 문화권을 사용하여 \{ column, type \} 형식의 형식 변환을 적용합니다.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

선택적 문화권을 사용하여 지정된 열에 변환 작업을 적용하여 테이블을 반환합니다.

-   `table`: 변환할 입력 테이블입니다.
-   `typeTransformations`: 적용할 형식 변환입니다. 단일 변환의 형식은 \{ column name, type value \}입니다. 변환 목록을 사용하여 한 번에 두 개 이상의 열 유형을 변경할 수 있습니다. 열이 없으면 오류가 발생합니다.
-   `culture`: (선택 사항) 열 형식을 변환할 때 사용할 문화권입니다(예: "en-US"). `culture`에 대해 레코드를 지정한 경우 다음 필드를 포함할 수 있습니다.
    -   `Culture`: 열 형식을 변환할 때 사용할 문화권입니다(예: "en-US").
    -   `MissingField`: 열이 없으면 이 필드가 대체 동작(예: `MissingField.UseNull` 또는 `MissingField.Ignore`)를 제공하지 않는 한 오류가 발생합니다.

`typeTransformations` 매개 변수의 형식 값은 `any`, 모든 `number` 유형, `text`, 모든 `date`, `time`, `datetime`, `datetimezone` 및 `duration` 유형, `logical` 또는 `binary`일 수 있습니다. 이 매개 변수에는 `list`, `record`, 또는 `function` 형식이 유효하지 않습니다.  
  
`typeTransformations`에 나열된 각 열에 대해 지정된 형식 값에 해당하는 ".From" 메서드는 일반적으로 변환을 수행하는 데 사용됩니다. 예를 들어 열에 대해 `Currency.Type` 형식 값이 제공되면 변환 함수 `Currency.From`이 해당 열의 각 값에 적용됩니다.


## Examples

### Example #1
첫 번째 열의 숫자 값을 텍스트 값으로 변환합니다.
```powerquery
let
    Source = #table(type table [a = number, b = number],
    {
        {1, 2},
        {3, 4}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"a", type text}
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [a = text, b = number],
{
    {"1", 2},
    {"3", 4}
})
```


### Example #2
테이블의 날짜를 프랑스 텍스트와 동등한 날짜로 변환합니다.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"Date", type text},
        "fr-FR"
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"JS-464", "USA", "24/03/2024"},
    {"LT-331", "France", "05/10/2024"},
    {"XE-100", "USA", "21/05/2024"},
    {"RT-430", "Germany", "18/01/2024"},
    {"LS-005", "France", "31/12/2023"},
    {"UW-220", "Germany", "25/02/2024"}
})
```


### Example #3
테이블의 날짜를 독일어 텍스트와 동등한 값으로 변환하고 테이블의 값을 백분율로 변환합니다.
```powerquery
let
    Source = #table(type table [Date = date, Customer ID = text, Value = number],
    {
        {#date(2024, 3, 12), "134282", .24368},
        {#date(2024, 5, 30), "44343", .03556},
        {#date(2023, 12, 14), "22", .3834}
    }),
    #"Transform Columns" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"Value", Percentage.Type}},
        "de-DE")
in
    #"Transform Columns"
```

Result: 
```powerquery
#table(type table [Date = text, Customer ID = text, Value = Percentage.Type],
{
    {"12.03.2024", "134282", .24368},
    {"30.05.2024", "44343", .03556},
    {"14.12.2023", "22", .3834}
})
```


### Example #4
`culture`에 대한 레코드 값을 사용하여 변환을 적용합니다.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"NewColumn", type number}},
        [Culture="fr-FR", MissingField=MissingField.UseNull]
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text, NewColumn = number],
{
    {"JS-464", "USA", "24/03/2024", null},
    {"LT-331", "France", "05/10/2024", null},
    {"XE-100", "USA", "21/05/2024", null},
    {"RT-430", "Germany", "18/01/2024", null},
    {"LS-005", "France", "31/12/2023", null},
    {"UW-220", "Germany", "25/02/2024", null}
})
```




## Category
Table.Transformation
