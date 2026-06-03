---
title: Table.TransformColumns
---

# Table.TransformColumns


Transformiert die Werte einer oder mehrerer Spalten.


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

Transformiert die angegebene Tabelle, indem jede Spaltenoperation in einer Liste angewendet wird.

-   `table`: Die zu transformierende Tabelle.
-   `transformOperations`: Die Transformationen, die an der Tabelle vorzunehmen sind. Das Format dieses Parameters ist entweder \{ column name, transformation \} oder \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Optional) Die Standardtransformation, die auf alle Spalten angewendet wird, die nicht in `transformOperations` aufgeführt sind.
-   `missingField`: (Optional) Gibt die erwartete Aktion für fehlende Werte an. Wenn eine in `transformOperations` aufgeführte Spalte nicht existiert, wird ein Fehler ausgelöst (`MissingField.Error`), sofern dieser Parameter keine Alternative angibt. Verwenden Sie einen der folgenden Werte:
    -   `MissingField.UseNull`: Fehlende Felder werden als `NULL`\-Werte eingeschlossen.
    -   `MissingField.Ignore`: Fehlende Felder werden ignoriert.


## Examples

### Example #1
Konvertieren Sie die Textwerte in Spalte \[A\] in Zahlenwerte und die Zahlenwerte in Spalte \[B\] in Textwerte.
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
Konvertieren Sie die numerischen Werte in der fehlenden Spalte \[X\] in Textwerte mit dem Standardwert `null` für Spalten, die nicht vorhanden sind.
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
Erhöhen Sie die Zahlenwerte in Spalte \[B\], konvertieren Sie sie in Textwerte, und konvertieren Sie alle anderen Spalten in Zahlen.
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
Verschieben Sie geplante Wartungsaufgaben, die an einem US-Feiertag stattfinden, auf den nächsten Tag oder, wenn der Feiertag auf einen Freitag fällt, auf den folgenden Montag.
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
