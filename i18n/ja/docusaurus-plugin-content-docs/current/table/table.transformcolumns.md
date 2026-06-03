---
title: Table.TransformColumns
---

# Table.TransformColumns


1 つ以上の列の値を変換します。


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

リスト内の各列操作を適用して、指定したテーブルを変換します。

-   `table`: 変換するテーブル。
-   `transformOperations`: テーブルに対して行う変換。このパラメーターの形式は、\{ column name, transformation \} または \{ column name, transformation, new column type \} です。
-   `defaultTransformation`: (オプション) `transformOperations` にリストされていないすべての列に適用される既定の変換。
-   `missingField`: (オプション) 欠損値に対して予期されるアクションを指定します。`transformOperations` にリストされている列が存在しない場合は、このパラメーターで代替を指定しない限り、エラー (`MissingField.Error`) が発生します。次のいずれかの値を使用します:
    -   `MissingField.UseNull`: 欠損フィールドはすべて `null` として扱われます。
    -   `MissingField.Ignore`: 不足しているフィールドはすべて無視されます。


## Examples

### Example #1
列 \[A\] のテキスト値を数値に変換し、列 \[B\] の数値をテキスト値に変換します。
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
欠落している列 \[X\] の数値をテキスト値に変換します。存在しない列には、既定で `null` が設定されます。
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
列 \[B\] 内の数値を増分してテキスト値に変換し、他のすべての列を数値に変換します。
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
米国の祝日に発生する予定メンテナンス タスクを次の日に移動するか、金曜日に祝日が発生した場合は次の月曜日に移動します。
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
