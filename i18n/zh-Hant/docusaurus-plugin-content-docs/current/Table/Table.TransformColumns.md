---
title: Table.TransformColumns
---

# Table.TransformColumns


轉換一或多個資料行的值。


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

透過套用清單中的每個資料行作業來轉換指定的資料表。

-   `table`: 要轉換的資料表。
-   `transformOperations`: 要對資料表執行的轉換。此參數格式為 \{ column name, transformation \} 或 \{ column name, transformation, new column type \}。
-   `defaultTransformation`: (選用) 套用至 `transformOperations` 中未列出的所有資料行的預設轉換。
-   `missingField`: (選用) 指定遺漏值的預期動作。如果 `transformOperations` 中列出的資料行不存在，除非此參數指定替代方案，否則會引發錯誤 (`MissingField.Error`)。使用下列其中一個值:
    -   `MissingField.UseNull`: 任何遺漏的欄位會以 `null` 值表示。
    -   `MissingField.Ignore`: 忽略任何遺漏欄位。


## Examples

### Example #1
將資料行 \[A\] 中的文字值轉換為數字值，將資料行 \[B\] 中的數字值轉換為文字值。
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
將遺漏的資料行 \[X\] 中的數值轉換成文字值，若為不存在的資料行，則預設值為`null`。
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
將資料行 \[B\] 中的數字值遞增並將它們轉換成文字值，並將所有其他資料行轉換成數字。
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
將排定在美國假日的維護作業移至隔天；若假日落在星期五，則移至下一個星期一。
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
