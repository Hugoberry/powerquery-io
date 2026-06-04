---
title: Table.TransformColumns
---

# Table.TransformColumns


Бір немесе бірнеше бағанның мәндерін түрлендіреді.


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

Көрсетілген кестені тізімдегі әр бағанды операциясына қолдану арқылы түрлендіреді.

-   `table`: Түрлендіретін кесте.
-   `transformOperations`: Кесте жасауға арналған түрлендірулер. Бұл параметрдің пішімі – \{ column name, transformation \} немесе \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Міндетті емес) `transformOperations` тізімінде көрсетілмеген барлық бағанға қолданылатын әдепкі түрлендіру.
-   `missingField`: (Міндетті емес) Жетіспейтін мәндерге қолданылатын күтілетін әрекетті көрсетеді. `transformOperations` тізімінде көрсетілген баған жоқ болса, бұл параметр балама көрсетпесе, қате (`MissingField.Error`) пайда болады. Төмендегі мәндердің бірін пайдаланыңыз:
    -   `MissingField.UseNull`: Жетіспейтін өрістер `null` мәндері ретінде енгізіледі.
    -   `MissingField.Ignore`: Жетіспейтін өрістер еленбейді.


## Examples

### Example #1
\[A\] бағанындағы мәтіндік мәндерді сандық мәнге және \[B\] бағанындағы сандық мәндерді мәтінге түрлендіріңіз.
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
Жоқ болып тұрған \[X\] бағанындағы сан түріндегі мәндерді мәтіндік мәндерге түрлендіріңіз, әдепкі бойынша жоқ бағандар үшін `null` мәнін пайдаланыңыз.
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
\[B\] бағанындағы сандық мәндерді көбейтіп, оларды мәтіндік мәндерге түрлендіріңіз, ал барлық басқа бағанды сандарға түрлендіріңіз.
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
АҚШ мерекелері кезінде жоспарланған техникалық қызмет көрсету тапсырмаларын келесі күнге немесе мереке жұма күніне сәйкес келсе, келесі дүйсенбіге ауыстырыңыз.
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
