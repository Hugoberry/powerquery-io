---
title: List.Select
---

# List.Select


조건과 일치하는 값의 목록을 반환합니다.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

지정한 목록에서 선택 조건과 일치하는 값을 반환합니다.

-   `list`: 검사할 목록입니다.
-   `selection`: 선택할 값을 결정하는 함수입니다.


## Examples

### Example #1
\{1, -3, 4, 9, -2\} 목록에서 0보다 큰 값을 찾습니다.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```


### Example #2
목록에서 토요일 또는 일요일에 해당하는 날짜를 선택합니다.
```powerquery
let
    dates = {
        #date(2025, 10, 20),  // Monday
        #date(2025, 10, 21),  // Tuesday
        #date(2025, 10, 25),  // Saturday
        #date(2025, 10, 26),  // Sunday
        #date(2025, 10, 27)   // Monday
    },
    weekendDates = List.Select(
        dates,
        each Date.DayOfWeek(_, Day.Monday) >= 5
    )
in
    weekendDates
```

Result: 
```powerquery
{
    #date(2025, 10, 25),
    #date(2025, 10, 26)
}
```


### Example #3
총 구매액이 $100 이상인 활성 고객 테이블을 표시합니다.
```powerquery
let
    customers = {
        [Name = "Alice", Status = "Active", Purchases = 150],
        [Name = "Bob", Status = "Inactive", Purchases = 200],
        [Name = "Carol", Status = "Active", Purchases = 90],
        [Name = "Dave", Status = "Active", Purchases = 120]
    },
    highValueActiveCustomers = List.Select(
        customers,
        each [Status] = "Active" and [Purchases] > 100
    ),
    resultTable = Table.FromRecords(
        highValueActiveCustomers,
        type table [Name = text, Status = text, Purchases = number]
    )
in
    resultTable
```

Result: 
```powerquery
#table(type table[Name = text, Status = text, Purchases = number],
{
    {"Alice", "Active", 150},
    {"Dave", "Active", 120}
})
```




## Category
List.Selection
