---
title: Table.TransformColumns
---

# Table.TransformColumns


Transforma els valors d'una o més columnes.


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

Transforma la taula especificada aplicant cada operació de columna d'una llista.

-   `table`: la taula que s'ha de transformar.
-   `transformOperations`: les transformacions que s'han de fer a la taula. El format d'aquest paràmetre és \{ column name, transformation \} o \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Opcional) la transformació per defecte aplicada a totes les columnes que no apareixen a `transformOperations`.
-   `missingField`: (Opcional) especifica l'acció esperada per als valors que falten. Si una columna que apareix a `transformOperations` no existeix, es produeix un error (`MissingField.Error`) llevat que aquest paràmetre especifiqui una alternativa. Utilitzeu un dels valors següents:
    -   `MissingField.UseNull`: els camps que falten s'inclouen com a valors `null`.
    -   `MissingField.Ignore`: els camps que falten s'ignoren.


## Examples

### Example #1
Converteix els valors de text de la columna \[A\] en valors de nombre, i els valors de nombre de la columna \[B\] en valors de text.
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
Incrementa els valors de nombre de la columna \[B\] i els converteix en valors de text, i converteix totes les altres columnes en nombres.
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
Desplaça les tasques de manteniment programades que es produeixen en un dia festiu dels EUA al dia següent o, si el festiu és un divendres, al dilluns següent.
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
