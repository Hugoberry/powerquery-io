---
title: Table.TransformColumns
---

# Table.TransformColumns


하나 이상의 열 값을 변환합니다.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Remarks

목록에서 각 열 작업을 적용하여 지정된 테이블을 변환합니다.

-   `table`: 변환할 테이블입니다.
-   `transformOperations`: 테이블에 적용할 변환입니다. 이 매개 변수의 형식은 \{ column name, transformation \} 또는 \{ column name, transformation, new column type \} 입니다.
-   `defaultTransformation`: (선택 사항) `transformOperations`에 나열되지 않은 모든 열에 적용되는 기본 변환입니다.
-   `missingField`: (선택 사항) 누락된 값에 대한 예상 동작을 지정합니다. `transformOperations`에 나열된 열이 없으면 이 매개 변수가 대안을 지정하지 않는 한 오류가 발생합니다(`MissingField.Error`). 다음 값 중 하나를 사용합니다.
    -   `MissingField.UseNull`: 누락된 필드는 `null` 값으로 포함됩니다.
    -   `MissingField.Ignore`: 누락된 필드는 무시됩니다.


## Examples

### Example #1
\[A\] 열의 텍스트 값은 숫자 값으로 변환하고 \[B\] 열의 숫자 값은 텍스트 값으로 변환합니다.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2
누락된 열 \[X\]의 숫자 값을 텍스트 값으로 변환합니다. 기본값은 존재하지 않는 열의 경우 `null`입니다.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #3
\[B\] 열의 숫자 값을 증가시켜 텍스트 값으로 변환하고 다른 모든 열을 숫자로 변환합니다.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```


### Example #4
미국 휴일에 예정된 유지 관리 작업은 다음 날로 옮기세요. 휴일이 금요일인 경우에는 다음 주 월요일로 옮기면 됩니다.
```powerquery
let
    MaintenanceSchedule = #table(type table [Task = text, Date = date],
    {
        {"HVAC Check", #date(2025, 7, 10)},         // Not a holiday
        {"Window Washing", #date(2025, 9, 1)},      // Labor Day
        {"Fire Drill", #date(2025, 9, 17)},         // Not a holiday
        {"Light Replacement", #date(2025, 11, 27)}  // Thanksgiving
    }),
    USHolidays = {
        #date(2025, 1, 1),   // New Year's Day
        #date(2025, 7, 4),   // Independence Day
        #date(2025, 9, 1),   // Labor Day
        #date(2025, 11, 27), // Thanksgiving
        #date(2025, 12, 25)  // Christmas
    },
    AdjustedSchedule = Table.TransformColumns(
        MaintenanceSchedule,
        {{"Date", each if List.Contains(USHolidays, _) then
            if Date.DayOfWeek(_, Day.Sunday) = 5 then
                Date.AddDays(_, 3)     // Friday to Monday
            else
                Date.AddDays(_, 1)     // Other to next day
        else _, type date}}
    )
in
    AdjustedSchedule
```

Result: 
```powerquery
#table(type table[Task = text, Date = date],
{
    {"HVAC Check", #date(2025, 7, 10)},
    {"Window Washing", #date(2025, 9, 2)},
    {"Fire Drill", #date(2025, 9, 17)},
    {"Light Replacement", #date(2025, 11, 28)}
})
```




## Category
Table.Transformation
