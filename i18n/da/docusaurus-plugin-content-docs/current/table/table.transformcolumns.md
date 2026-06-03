---
title: Table.TransformColumns
---

# Table.TransformColumns


Transformerer værdierne i en eller flere kolonner.


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

Transformerer den angivne tabel ved at anvende hver kolonnehandling i en liste.

-   `table`: Den tabel, der skal transformeres.
-   `transformOperations`: De transformationer, der skal foretages i tabellen. Formatet af denne parameter er enten \{ column name, transformation \} eller \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Valgfrit) Standardtransformationen anvendes på alle kolonner, der ikke er angivet i `transformOperations`.
-   `missingField`: (Valgfrit) Angiver den forventede handling for manglende værdier. Hvis en kolonne, der er angivet i `transformOperations`, ikke findes, udløses der en fejl (`MissingField.Error`), medmindre denne parameter angiver et alternativ. Brug en af følgende værdier:
    -   `MissingField.UseNull`: Manglende felter inkluderes som værdier af typen `null`.
    -   `MissingField.Ignore`: Manglende felter ignoreres.


## Examples

### Example #1
Konvertér tekstværdierne i kolonnen \[A\] til talværdier og talværdierne i kolonne \[B\] til tekstværdier.
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
Convert the number values in missing column \[X\] to text values, defaulting to `null` for columns that don't exist.
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
Øg talværdierne i kolonne \[B\] gradvist, konvertér dem til tekstværdier, og konvertér alle andre kolonner til tal.
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
Flyt planlagte vedligeholdelsesopgaver, der finder sted på en amerikansk helligdag, til den næste dag eller, hvis helligdagen finder sted på en fredag, til den næste mandag.
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
