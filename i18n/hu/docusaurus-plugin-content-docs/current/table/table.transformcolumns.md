---
title: Table.TransformColumns
---

# Table.TransformColumns


Átalakítja egy vagy több oszlop értékeit.


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

Átalakítja a megadott táblát úgy, hogy alkalmazza a listában szereplő minden egyes oszlopműveletet.

-   `table`: Az átalakítandó tábla.
-   `transformOperations`: A táblán végrehajtani kívánt átalakítások. Ennek a paraméternek a formátuma vagy \{ column name, transformation \} vagy \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Nem kötelező) Az alapértelmezett átalakítás, amelyet azokra az oszlopokra alkalmaz, amelyek nem szerepelnek a `transformOperations` listában.
-   `missingField`: (Nem kötelező) Megadja a hiányzó értékek várt műveletét. Ha a(z) `transformOperations` listában nem létezik oszlop, hibaüzenet jelenik meg (`MissingField.Error`), kivéve, ha ez a paraméter alternatívát határoz meg. Használja a következő értékek egyikét:
    -   `MissingField.UseNull`: A hiányzó mezők `null` értékekként szerepelnek.
    -   `MissingField.Ignore`: A hiányzó mezők figyelmen kívül lesznek hagyva.


## Examples

### Example #1
Az \[A\] oszlop szöveges értékeit számértékekké alakíthatja, a \[B\] oszlopban szereplő számértékeket pedig szöveges értékekké.
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
Átalakíthatja a hiányzó \[X\] oszlop számértékeit szövegértékekké, `null` alapértelmezett értéket adva a nem létező oszlopoknak.
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
Növelheti a \[B\] oszlopban szereplő számértékeket és átalakíthatja őket szöveges értékekké, és az összes többi oszlopot számmá alakíthatja.
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
Helyezze át az Egyesült Államok munkaszüneti napjára eső ütemezett karbantartási feladatokat a következő napra, vagy ha a munkaszüneti nap péntekre esik, a következő hétfőre.
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
