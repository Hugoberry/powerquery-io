---
title: Table.TransformColumns
---

# Table.TransformColumns


Transformeert de waarden van een of meer kolommen.


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

Transformeert de opgegeven tabel door elke kolombewerking in een lijst toe te passen.

-   `table`: de tabel die moet worden getransformeerd.
-   `transformOperations`: de transformaties die op de tabel moeten worden toegepast. De indeling van deze parameter is \{ column name, transformation \} of \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (optioneel) De standaardtransformatie die wordt toegepast op alle kolommen die niet worden vermeld in `transformOperations`.
-   `missingField`: (optioneel) Hiermee geeft u de verwachte actie op voor ontbrekende waarden. Als een kolom vermeld in `transformOperations` niet bestaat, wordt er een fout gegenereerd (`MissingField.Error`), tenzij deze parameter een alternatief opgeeft. Gebruik een van de volgende waarden:
    -   `MissingField.UseNull`: ontbrekende velden worden opgenomen als `null` waarden.
    -   `MissingField.Ignore`: Ontbrekende velden worden genegeerd.


## Examples

### Example #1
Converteer de tekstwaarden in kolom \[A\] naar getalwaarden en de getalwaarden in kolom \[B\] naar tekstwaarden.
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
Converteer de getalwaarden in de ontbrekende kolom \[X\] naar tekstwaarden, standaard `null` voor kolommen die niet bestaan.
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
Verhoog de getalwaarden in kolom \[B\] en converteer ze naar tekstwaarden, en converteer alle andere kolommen naar getallen.
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
Verplaats geplande onderhoudstaken die op een Amerikaanse feestdag vallen naar de volgende dag of, als de feestdag op een vrijdag valt, naar de volgende maandag.
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
