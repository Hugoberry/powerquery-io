---
title: Table.TransformColumns
---

# Table.TransformColumns


Trasforma i valori di una o più colonne.


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

Trasforma la tabella specificata applicando ogni operazione di colonna in un elenco.

-   `table`: tabella da trasformare.
-   `transformOperations`: trasformazioni da applicare alla tabella. Il formato di questo parametro è \{ column name, transformation \} o \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (facoltativo) trasformazione predefinita applicata a tutte le colonne non elencate in `transformOperations`.
-   `missingField`: (facoltativo) specifica l'azione prevista per i valori mancanti. Se una colonna elencata in `transformOperations` non esiste, viene generato un errore (`MissingField.Error`) a meno che il parametro non specifichi un'alternativa. Usare uno dei valori seguenti:
    -   `MissingField.UseNull`: tutti i campi mancanti vengono inclusi come valori `null`.
    -   `MissingField.Ignore`: tutti i campi mancanti vengono ignorati.


## Examples

### Example #1
Converte i valori di testo nella colonna \[A\] in valori numerici e i valori numerici nella colonna \[B\] in valori di testo.
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
Converte i valori numerici nelle colonne mancanti \[X\] in valori di testo. Per le colonne che non esistono, verrà usato il valore predefinito `null`.
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
Incrementa i valori numerici nella colonna \[B\], li converte in valori di testo e converte tutte le altre colonne in numeri.
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
Sposta le attività di manutenzione programmate che ricadono in un giorno festivo negli Stati Uniti al giorno successivo o, se il giorno festivo è di venerdì, al lunedì seguente.
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
