---
title: Table.TransformColumns
---

# Table.TransformColumns


Преобразует значения в одном или нескольких столбцах.


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

Преобразует указанную таблицу, применяя каждую операцию к столбцам из списка.

-   `table`: таблица, которую нужно преобразовать.
-   `transformOperations`: преобразования, которые нужно применить к таблице. Этот параметр должен иметь формат \{ column name, transformation \} или \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (необязательно) преобразование по умолчанию, применяемое ко всем столбцам, не указанным в `transformOperations`.
-   `missingField`: (необязательно) определяет действие, которое следует выполнить для отсутствующих значений. Если столбец, указанный в `transformOperations`, не существует, генерируется ошибка (`MissingField.Error`), кроме случаев, когда этот параметр задает иное действие. Используйте одно из следующих значений:
    -   `MissingField.UseNull`: любые отсутствующие поля будут заполняться значениями `null`.
    -   `MissingField.Ignore`: Все отсутствующие поля игнорируются.


## Examples

### Example #1
Преобразуйте текстовые значения из столбца \[A\] в числовое значение, а числовые значения из столбца \[B\] в текстовые.
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
Преобразовать числовые значения в отсутствующем столбце \[X\] в текстовые, используя по умолчанию значение `null` для столбцов, которые не существуют.
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
Увеличьте числовые значения в столбце \[B\] и преобразуйте их в текстовые значения, а все остальные столбцы преобразуйте в числа.
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
Перенесите задачи по запланированному обслуживанию, которые приходятся на праздничный день в США, на следующий день или, если праздничный день выпадает на пятницу, на следующий понедельник.
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
