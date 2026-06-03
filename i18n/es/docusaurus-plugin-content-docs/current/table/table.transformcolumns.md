---
title: Table.TransformColumns
---

# Table.TransformColumns


Transforma los valores de una o varias columnas.


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

Transforma la tabla especificada aplicando cada operación de columna de una lista.

-   `table`: la tabla que se va a transformar.
-   `transformOperations`: transformaciones que se van a realizar en la tabla. El formato de este parámetro es \{ column name, transformation \} o \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Opcional) transformación predeterminada aplicada a todas las columnas que no aparecen en `transformOperations`.
-   `missingField`: (Opcional) especifica la acción esperada para los valores perdidos. Si no existe una columna enumerada en `transformOperations`, se produce un error (`MissingField.Error`) a menos que este parámetro especifique una alternativa. Use uno de los siguientes valores:
    -   `MissingField.UseNull`: Los campos que faltan se incluyen como valores `null`.
    -   `MissingField.Ignore`: se omiten los campos que faltan.


## Examples

### Example #1
Convierte los valores de texto de la columna \[A\] en valores numéricos, y los valores numéricos de la columna \[B\] en valores de texto.
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
Convierta los valores numéricos de la columna que falta \[X\] en valores de texto, con el valor predeterminado `null` para las columnas que no existen.
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
Incrementa los valores numéricos de la columna \[B\] y los convierte en valores de texto, y convierte todas las demás columnas en números.
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
Mueva las tareas de mantenimiento programadas que coincidan con un día festivo en EE. UU. al día siguiente o, si el día festivo es un viernes, al lunes siguiente.
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
