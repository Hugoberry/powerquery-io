---
title: List.Select
---

# List.Select


条件に一致する値のリストを返します。


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

選択条件に一致する指定したリストの値を返します。

-   `list`: 調べるリスト。
-   `selection`: 選択する値を決定する関数。


## Examples

### Example #1
リスト \{1, -3, 4, 9, -2\} 内の 0 を超える値を求めます。
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```


### Example #2
土曜日または日曜日に該当する日付をリストから選択します。
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
購入合計が $100 を超えるアクティブな顧客のテーブルを表示します。
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
