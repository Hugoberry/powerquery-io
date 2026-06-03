---
title: List.Select
---

# List.Select


Retourneert een lijst met waarden die overeenkomen met de voorwaarde.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

Geeft de waarden uit de opgegeven lijst terug die voldoen aan de selectievoorwaarde.

-   `list`: de lijst die moet worden onderzocht.
-   `selection`: de functie die bepaalt welke waarden geselecteerd worden.


## Examples

### Example #1
De waarden in de lijst \{1, -3, 4, 9, -2\} opzoeken die groter zijn dan 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```


### Example #2
Selecteer datums uit de lijst die op zaterdag of zondag vallen.
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
Toon een tabel met actieve klanten met een aankooptotaal van meer dan USD 100.
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
