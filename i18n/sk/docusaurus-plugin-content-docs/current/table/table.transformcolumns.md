---
title: Table.TransformColumns
---

# Table.TransformColumns


Transformuje hodnoty jedného alebo viacerých stĺpcov.


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

Transformuje zadanú tabuľku použitím každej operácie stĺpca v zozname.

-   `table`: Tabuľka, ktorá sa má transformovať.
-   `transformOperations`: Transformácie, ktoré sa majú vykonať v tabuľke. Formát tohto parametra je \{ column name, transformation \} alebo \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Voliteľné) Predvolená transformácia sa použila na všetky stĺpce, ktoré nie sú uvedené v `transformOperations`.
-   `missingField`: (Voliteľné) Určuje očakávanú akciu pre chýbajúce hodnoty. Ak stĺpec uvedený v `transformOperations` neexistuje, vyvolá sa chyba (`MissingField.Error`), pokiaľ tento parameter neuvádza alternatívu. Použite jednu z nasledujúcich hodnôt:
    -   `MissingField.UseNull`: Chýbajúce polia sa zahrnú ako `hodnoty null`.
    -   `MissingField.Ignore`: Všetky chýbajúce polia sa ignorujú.


## Examples

### Example #1
Skonvertuje textové hodnoty v stĺpci \[A\] na číselné hodnoty a číselné hodnoty v stĺpci \[B\] na textové hodnoty.
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
Previesť číselné hodnoty v chýbajúcom stĺpci \[X\] na textové hodnoty, pričom pre stĺpce, ktoré neexistujú, sa použije predvolená hodnota `null`.
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
Zvýšte číselné hodnoty v stĺpci \[B\] a skonvertujte ich na textové hodnoty. Všetky ostatné stĺpce skonvertujte na čísla.
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
Presuňte naplánované úlohy údržby, ktoré sa vyskytujú počas sviatkov USA, na nasledujúci deň alebo, ak sa sviatok vyskytuje v piatok, na nasledujúci pondelok.
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
