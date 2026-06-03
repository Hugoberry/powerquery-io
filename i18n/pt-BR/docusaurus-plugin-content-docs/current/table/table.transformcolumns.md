---
title: Table.TransformColumns
---

# Table.TransformColumns


Transforma os valores de uma ou mais colunas.


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

Transforma a tabela especificada aplicando cada operação de coluna em uma lista.

-   `table`: A tabela a ser transformada.
-   `transformOperations`: As transformações a serem feitas na tabela. O formato deste parâmetro é \{ column name, transformation \} ou \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Opcional) A transformação padrão aplicada a todas as colunas não listadas em `transformOperations`.
-   `missingField`: (Opcional) Especifica a ação esperada para valores ausentes. Se uma coluna listada em `transformOperations` não existir, um erro será gerado (`MissingField.Error`), a menos que este parâmetro especifique uma alternativa. Use um dos seguintes valores:
    -   `MissingField.UseNull`: Todos os campos ausentes são incluídos como valores `null`.
    -   `MissingField.Ignore`: Todos os campos ausentes são ignorados.


## Examples

### Example #1
Converta os valores de texto da coluna \[A\] em valores numéricos e os valores numéricos na coluna \[B\]~em valores de texto.
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
Converta os valores numéricos na coluna ausente \[X\] em valores de texto, usando como padrão `null` para colunas que não existem.
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
Incremente os valores numéricos da coluna \[B\], converta-os em valores de texto e converta todas as outras colunas em números.
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
Mover as tarefas de manutenção agendada que ocorrem em um feriado dos EUA para o dia seguinte ou, se o feriado for em uma sexta-feira, para a próxima segunda-feira.
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
