---
title: Table.TransformColumns
---

# Table.TransformColumns


转换一个或多个列的值。


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

通过应用列表中的每个列操作，对指定表进行转换。

-   `table`: 要转换的表。
-   `transformOperations`: 要对表执行的转换。此参数的格式为 \{ column name, transformation \} 或 \{ column name, transformation, new column type \}。
-   `defaultTransformation`: (可选)应用于 `transformOperations` 中未列出的所有列的默认转换。
-   `missingField`: (可选)指定对缺失值的预期操作。如果 `transformOperations` 中列出的列不存在，则会引发错误(`MissingField.Error`)，除非此参数指定了备用值。使用以下值之一:
    -   `MissingField.UseNull`: 任何缺失字段都会以 `null` 值的形式包含在内。
    -   `MissingField.Ignore`: 忽略任何缺失字段。


## Examples

### Example #1
将列 \[A\] 中的文本值转换为数字值，并将列 \[B\] 中的数字值转换为文本值。
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
将缺失列 \[X\] 中的数字值转换为文本值，对于不存在的列，默认值为 `null`。
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
递增列 \[B\] 中的数字值并将其转换为文本值，并将所有其他列转换为数字。
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
若计划性维护任务安排在美国节假日执行，则移至次日执行；若该节假日恰逢周五，则移至下周一执行。
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
