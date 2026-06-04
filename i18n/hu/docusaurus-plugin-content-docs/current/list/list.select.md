---
title: List.Select
---

# List.Select


A feltételnek megfelelő értékekből álló listát ad vissza.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

A megadott lista azon értékeit adja vissza, amelyek megfelelnek a kiválasztási feltételnek.

-   `list`: A vizsgálandó lista.
-   `selection`: A kiválasztandó értékeket meghatározó függvény.


## Examples

### Example #1
A 0-nál nagyobb értékek megkeresése az \{1, -3, 4, 9, -2\} listán
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```


### Example #2
A szombatra vagy vasárnapra eső dátumok kiválasztása a listából.
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
A 100 USD feletti vásárlási végösszegekkel rendelkező aktív ügyfelek táblázatának megjelenítése.
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
