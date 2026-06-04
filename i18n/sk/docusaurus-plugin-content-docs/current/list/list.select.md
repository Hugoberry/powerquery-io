---
title: List.Select
---

# List.Select


Vráti zoznam hodnôt, ktoré spĺňajú podmienku.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

Vráti hodnoty zo zadaného zoznamu, ktoré zodpovedajú podmienke výberu.

-   `list`: Zoznam, ktorý sa má preskúmať.
-   `selection`: Funkcia, ktorá určuje hodnoty, ktoré sa majú vybrať.


## Examples

### Example #1
Nájdite hodnoty v zozname \{1, -3, 4, 9, -2\}, ktoré sú väčšie ako 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```


### Example #2
Vyberte zo zoznamu termíny, ktoré pripadajú na sobotu alebo nedeľu.
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
Zobraziť tabuľku aktívnych zákazníkov s celkovou hodnotou nákupu nad 100 $.
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
