---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


Suprimeix totes les aparicions de les files especificades de la taula.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Remarks

Suprimeix totes les aparicions de les files especificades de la taula.

-   `table`: taula en la qual es cercarà.
-   `rows`: llista que conté informació sobre les files que se suprimiran.
-   `equationCriteria`: (opcional) especifica com es determina la igualtat en comparar els valors. Aquest paràmetre pot ser una funció de selector clau, una funció de comparador o una llista de les columnes de la taula que s'utilitzarà en comparar les files.


## Examples

### Example #1
Suprimiu les files en què \[a = 1\] de la taula especificada.
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
Suprimiu les comandes cancel·lades i ignoreu les majúscules i minúscules.
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
Suprimiu les tasques de manteniment que cauen en dies festius als EUA.
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
