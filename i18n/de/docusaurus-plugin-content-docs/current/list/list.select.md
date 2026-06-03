---
title: List.Select
---

# List.Select


Gibt eine Liste mit Werten zurück, die die Bedingung erfüllen.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

Gibt die Werte aus der angegebenen Liste zurück, die der Auswahlbedingung entsprechen.

-   `list`: Die zu untersuchende Liste.
-   `selection`: Die Funktion, die die auszuwählenden Werte bestimmt.


## Examples

### Example #1
Ermittelt die Werte in der Liste "\{1, -3, 4, 9, -2\}", die größer null sind.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```


### Example #2
Wählen Sie Datumsangaben aus der Liste aus, die am Samstag oder Sonntag liegen.
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
Zeigt eine Tabelle mit aktiven Kunden mit Kaufsummen über 100 USD an.
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
