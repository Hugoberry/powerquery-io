---
title: Table.TransformColumns
---

# Table.TransformColumns


Transformiše vrednosti jedne ili više kolona.


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

Transformiše navedenu tabelu primenjujući svaku operaciju kolone iz liste.

-   `table`: Tabela koja se transformiše.
-   `transformOperations`: Transformacije koje treba izvršiti na tabeli. Format ovog parametra je ili \{ column name, transformation \} ili \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (opciono) Podrazumevana transformacija primenjena na sve kolone koje nisu navedene u `transformOperations`.
-   `missingField`: (opciono) Navodi očekivanu radnju za nedostajuće vrednosti. Ako kolona navedena u `transformOperations` ne postoji, javlja se greška (`MissingField.Error`) osim ako ovaj parametar ne navede alternativu. Koristite jednu od sledećih vrednosti:
    -   `MissingField.UseNull`: Sva polja koja nedostaju su uključena kao `null` vrednosti.
    -   `MissingField.Ignore`: Sva nedostajuća polja se ignorišu.


## Examples

### Example #1
Konvertujte tekstualne vrednosti u koloni \[A\] u brojčane vrednosti, a brojčane vrednosti u koloni \[B\] u tekstualne vrednosti.
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
Konvertujte numeričke vrednosti u koloni \[X\] koja nedostaje u tekstualne vrednosti, što će podrazumevano dati vrednost `null` za kolone koje ne postoje.
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
Povećajte brojčane vrednosti u koloni \[B\] i konvertujte ih u tekstualne vrednosti i konvertujte sve ostale kolone u brojeve.
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
Pomerite zakazane zadatke održavanja koji se dešavaju na praznik u SAD na sledeći dan ili, ako praznik pada u petak, na sledeći ponedeljak.
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
