---
title: Table.TransformColumns
---

# Table.TransformColumns


Omvandlar värdena för en eller flera kolumner.


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

Omvandlar den angivna tabellen genom att tillämpa varje kolumnåtgärd i en lista.

-   `table`: Tabellen som ska transformeras.
-   `transformOperations`: De transformeringar som ska göras i tabellen. Formatet för den här parametern är antingen \{ column name, transformation \} eller \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Valfritt) Standardomvandlingen tillämpas på alla kolumner som inte visas i `transformOperations`.
-   `missingField`: (Valfritt) Anger den förväntade åtgärden för saknade värden. Om en kolumn i `transformOperations` inte finns genereras ett fel (`MissingField.Error`) om inte den här parametern anger ett alternativ. Använd något av följande värden:
    -   `MissingField.UseNull`: Fält som saknas inkluderas som `null` värden.
    -   `MissingField.Ignore`: Fält som saknas ignoreras.


## Examples

### Example #1
Omvandla textvärdena i kolumnen \[A\] till talvärden och talvärdena i kolumnen \[B\] till textvärden.
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
Konvertera talvärdena i kolumnen \[X\] som saknas till textvärden. Standardvärdet är `null`för kolumner som inte finns.
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
Öka talvärdena i kolumnen \[B\] och omvandla dem till textvärden och omvandla alla andra kolumner till tal.
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
Flytta schemalagda underhållsaktiviteter som inträffar på en helgdag i USA till nästa dag eller, om helgdagen inträffar på en fredag, till nästa måndag.
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
