---
title: Table.TransformColumns
---

# Table.TransformColumns


Transformuje hodnoty jednoho nebo více sloupců.


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

Transformuje zadanou tabulku použitím každé operace sloupce v seznamu.

-   `table`: Tabulka, která se má transformovat.
-   `transformOperations`: Transformace, které se mají provést v tabulce. Formát tohoto parametru je buď \{ column name, transformation \}, nebo \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Volitelné) Výchozí transformace použitá u všech sloupců, které nejsou uvedené v: `transformOperations`.
-   `missingField`: (Volitelné) Určuje očekávanou akci pro chybějící hodnoty. Pokud sloupec uvedený v: `transformOperations` neexistuje, vyvolá se chyba (`MissingField.Error`), jestliže tento parametr neurčí alternativu. Použijte jednu z následujících hodnot:
    -   `MissingField.UseNull`: Všechna chybějící pole jsou zahrnuta jako hodnoty `null`.
    -   `MissingField.Ignore`: Všechna chybějící pole se ignorují.


## Examples

### Example #1
Převeďte textové hodnoty ve sloupci \[A\] na číselné hodnoty a číselné hodnoty ve sloupci \[B\] na textové hodnoty.
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
Převeďte číselné hodnoty v chybějícím sloupci \[X\] na textové hodnoty. Výchozí hodnota pro sloupce, které neexistují, je `null`.
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
Zvyšte číselné hodnoty ve sloupci \[B\] a převeďte je na textové hodnoty a všechny ostatní sloupce převeďte na čísla.
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
Přesuňte naplánované úkoly údržby, ke kterým dojde během svátku v USA, na další den nebo na další pondělí, pokud svátek bude v pátek.
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
