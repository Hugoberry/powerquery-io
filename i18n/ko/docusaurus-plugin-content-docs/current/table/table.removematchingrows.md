---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


테이블에서 지정한 행의 모든 발생을 제거합니다.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Remarks

테이블에서 지정한 행의 모든 발생을 제거합니다.

-   `table`: 검색할 테이블입니다.
-   `rows`: 제거할 행에 대한 정보를 담은 목록입니다.
-   `equationCriteria`: (선택 사항) 값을 비교할 때 동등성을 판단하는 방법을 지정합니다. 이 매개 변수는 키 선택기 함수, 비교자 함수 또는 행을 비교할 때 사용할 테이블의 열 목록이 될 수 있습니다.


## Examples

### Example #1
지정된 테이블에서 \[a = 1\]인 모든 행을 제거하세요.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```


### Example #2
취소된 주문을 대소문자 구분 없이 제거하세요.
```powerquery
let
    CurrentOrders = #table(type table[OrderID = number, Product = text, Quantity = number],
    {
        {101, "Widget", 5},
        {102, "Gadget", 3},
        {103, "Widget", 5}
    }),
    CanceledOrders = {
        [OrderID = 103, Product = "widget", Quantity = 5]
    },
    FilteredOrders = Table.RemoveMatchingRows(CurrentOrders, CanceledOrders, Comparer.OrdinalIgnoreCase)
in
    FilteredOrders
```

Result: 
```powerquery
#table(type table[OrderID = number, Product = text, Quantity = number],
{
    {101, "Widget", 5},
    {102, "Gadget", 3}
})
```


### Example #3
미국 공휴일에 해당하는 유지 관리 작업을 모두 제거하세요.
```powerquery
let
    MaintenanceSchedule = #table(type table [Task = text, Date = date],
    {
        {"HVAC Check", #date(2025, 7, 10)},              // Not a holiday
        {"Window Washing", #date(2025, 9, 1)},           // Labor Day
        {"Fire Drill", #date(2025, 9, 17)},              // Not a holiday
        {"Light Bulb Replacement", #date(2025, 11, 27)}  // Thanksgiving
    }),

    USHolidays = {
        [Date = #date(2025, 1, 1)],   // New Year's Day
        [Date = #date(2025, 7, 4)],   // Independence Day
        [Date = #date(2025, 9, 1)],   // Labor Day
        [Date = #date(2025, 11, 27)], // Thanksgiving
        [Date = #date(2025, 12, 25)]  // Christmas
    },

    FilteredSchedule = Table.RemoveMatchingRows(
        MaintenanceSchedule,
        USHolidays,
        {"Date"}
    )
in
    FilteredSchedule
```

Result: 
```powerquery
#table(type table[Task = text, Date = date],
{
    {"HVAC Check", #date(2025, 7, 10)},
    {"Fire Drill", #date(2025, 9, 17)}
})
```




## Category
Table.Membership
