---
title: Table.TransformColumns
---

# Table.TransformColumns


Pārveido vienas vai vairāku kolonnu vērtības.


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

Pārveido norādīto tabulu, piemērojot katru kolonnas darbību sarakstā.

-   `table`: pārveidojamā tabula.
-   `transformOperations`: izmaiņas, kas jāveic tabulā. Šī parametra formāts ir \{ column name, transformation \} vai \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (neobligāti) noklusējuma pārvēršana, kas tiek piemērota visām kolonnām, kas nav uzskaitītas `transformOperations`.
-   `missingField`: (neobligāti) norāda paredzēto darbību trūkstošo vērtību gadījumā. Ja sarakstā `transformOperations` minētā kolonna nepastāv, tiek izraisīta kļūda (`MissingField.Error`), ja vien šis parametrs nenosaka alternatīvu. Izmantojiet kādu no šīm vērtībām:
    -   `MissingField.UseNull`: trūkstošie lauki tiek iekļauti kā `null` vērtības.
    -   `MissingField.Ignore`: visi trūkstošie lauki tiek ignorēti.


## Examples

### Example #1
Pārvērtiet kolonnas \[A\] teksta vērtības par skaitliskajām vērtībām un kolonnas \[B\] skaitliskās vērtības par teksta vērtībām.
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
Pārvērš trūkstošās kolonnas \[X\] skaitliskās vērtības par teksta vērtībām, neesošajām kolonnām pēc noklusējuma piešķirot vērtību `null`.
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
Palielināt kolonnas \[B\] skaitliskās vērtības un pārvērst tās par teksta vērtībām, kā arī visas pārējās kolonnas pārvērst par skaitļiem.
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
Pārvietojiet plānotos uzturēšanas uzdevumus, kas ieplānoti ASV brīvdienā, uz nākamo dienu vai, ja brīvdiena iekrīt piektdienā, uz nākamo pirmdienu.
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
