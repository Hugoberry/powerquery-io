---
title: Table.TransformColumns
---

# Table.TransformColumns


Preoblikuje vrednosti enega ali več stolpcev.


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

Pretvori določeno tabelo tako, da uporabi vsak postopek stolpca s seznama.

-   `table`: tabela, ki jo želite pretvoriti.
-   `transformOperations`: pretvorbe, ki jih je treba izvesti na tabeli. Oblika tega parametra je \{ column name, transformation \} ali \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (izbirno) privzeta pretvorba, uporabljena za vse stolpce, ki niso navedeni v `transformOperations`.
-   `missingField`: (izbirno) določa pričakovano dejanje za manjkajoče vrednosti. Če stolpec, naveden v `transformOperations`, ne obstaja, pride do napake (`MissingField.Error`), če ta parameter ne določa drugačne možnosti. Uporabite eno od naslednjih vrednosti:
    -   `MissingField.UseNull`: vsa manjkajoča polja so vključena kot vrednosti `null`.
    -   `MissingField.Ignore`: Vsa manjkajoča polja so prezrta.


## Examples

### Example #1
Pretvorite besedilne vrednosti v stolpcu \[A\] v številske vrednosti, številske vrednosti v stolpcu \[B\] pa v besedilne vrednosti.
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
Pretvorite številske vrednosti v manjkajočem stolpcu \[X\] v besedilne vrednosti in pri tem prikažite privzeto vrednost `null` za stolpce, ki ne obstajajo.
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
Povečajte številske vrednosti v stolpcu \[B\] in jih pretvorite v besedilne vrednosti, vse druge stolpce pa pretvorite v številke.
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
Premaknite načrtovana opravila vzdrževanja, ki se zgodijo na praznik v ZDA, na naslednji dan ali, če praznik pade na petek, na naslednji ponedeljek.
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
