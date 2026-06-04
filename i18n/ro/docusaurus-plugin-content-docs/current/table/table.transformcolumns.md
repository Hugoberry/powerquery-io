---
title: Table.TransformColumns
---

# Table.TransformColumns


Transformă valorile uneia sau mai multor coloane.


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

Transformă tabelul specificat aplicând fiecare operație de coloană dintr-o listă.

-   `table`: tabelul de transformat.
-   `transformOperations`: transformările de făcut în tabel. Formatul acestui parametru este \{ column name, transformation \} sau \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (opțional) transformarea implicită aplicată tuturor coloanelor care nu sunt listate în `transformOperations`.
-   `missingField`: (opțional) specifică acțiunea așteptată pentru valorile lipsă. Dacă o coloană listată în `transformOperations` nu există, se generează o eroare (`MissingField.Error`), cu excepția cazului în care acest parametru specifică o alternativă. Utilizați una dintre următoarele valori:
    -   `MissingField.UseNull`: toate câmpurile lipsă sunt incluse ca valori `null`.
    -   `MissingField.Ignore`: toate câmpurile lipsă sunt ignorate.


## Examples

### Example #1
Efectuați conversia valorilor text din coloana \[A\] în valori numerice, și a valorilor numerice din coloana \[B\] în valori text.
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
Efectuați conversia valorilor numerice din coloana lipsă \[X\] la valori text, implicit la `null` pentru coloanele care nu există.
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
Incrementați valorile numerice din coloana \[B\] și convertiți-le în valori text și efectuați conversia tuturor celorlalte coloane în numere.
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
Mutați activitățile de întreținere planificate care au loc într-o zi de vacanță din Statele Unite ale Americii în ziua următoare sau, dacă vacanța are loc într-o zi de vineri, în următoarea zi de luni.
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
