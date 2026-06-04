---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


Кестеден көрсетілген жолдардың барлық даналарын жояды.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Remarks

Кестеден көрсетілген жолдардың барлық данасын жояды.

-   `table`: Іздеу орындалатын кесте.
-   `rows`: Жойылатын жолдар туралы ақпаратты қамтитын тізім.
-   `equationCriteria`: (Міндетті емес) Мәндерді салыстыру кезінде теңдіктің қалай анықталатынын көрсетеді. Бұл параметр жолдарды салыстырғанда қолданылатын кілтті таңдаушы функция, салыстырушы функция немесе кестедегі бағандардың тізімі болуы мүмкін.


## Examples

### Example #1
Көрсетілген кестеден \[a = 1\] болатын барлық жолды өшіріңіз.
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
Регистрге мән бермей, күшін жойған тапсырыстарды өшіріңіз.
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
АҚШ мерекелеріне сәйкес келетін барлық техникалық қызмет тапсырмасын алып тастаңыз.
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
