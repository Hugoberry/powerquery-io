---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


使用特定的区域性应用格式 \{ column, type \} 的类型转换。


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

通过使用可选区域性将转换操作应用于指定列来返回表。

-   `table`: 要转换的输入表。
-   `typeTransformations`: 要应用的类型转换。单个转换的格式为 \{ column name, type value \}。转换列表可用于一次更改多个列的类型。如果列不存在，则会引发错误。
-   `culture`: (可选)转换列类型时要使用的区域性(例如 "en-US")。如果为 `culture` 指定了记录，则它可能包含以下字段:
    -   `Culture`: 转换列类型时要使用的区域性(例如 "en-US")。
    -   `MissingField`: 如果列不存在，则会引发错误，除非此字段提供替代行为(例如 `MissingField.UseNull` 或 `MissingField.Ignore`)。

`typeTransformations` 参数中的类型值可为 `any`、所有 `number` 类型、`text`、所有 `date`、`time`、`datetime`、`datetimezone` 和 `duration` 类型、`logic` 或 `binary`。`list`、`record`、`table` 或 `function` 类型对此参数无效。  
  
对于 `typeTransformations` 中列出的每个列，与指定的类型值对应的 ".From" 方法通常用于执行转换。例如，如果为列提供 `Currency.Type` 类型值，则转换函数 `Currency.From` 应用于该列中的每个值。


## Examples

### Example #1
将第一列中的数字值转换为文本值。
```powerquery
let
    Source = #table(type table [a = number, b = number],
    {
        {1, 2},
        {3, 4}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"a", type text}
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [a = text, b = number],
{
    {"1", 2},
    {"3", 4}
})
```


### Example #2
将表格中的日期转换为其法语文本等效项。
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"Date", type text},
        "fr-FR"
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"JS-464", "USA", "24/03/2024"},
    {"LT-331", "France", "05/10/2024"},
    {"XE-100", "USA", "21/05/2024"},
    {"RT-430", "Germany", "18/01/2024"},
    {"LS-005", "France", "31/12/2023"},
    {"UW-220", "Germany", "25/02/2024"}
})
```


### Example #3
将表中的日期转换为其德语文本等效项，并将表中的值转换为百分比。
```powerquery
let
    Source = #table(type table [Date = date, Customer ID = text, Value = number],
    {
        {#date(2024, 3, 12), "134282", .24368},
        {#date(2024, 5, 30), "44343", .03556},
        {#date(2023, 12, 14), "22", .3834}
    }),
    #"Transform Columns" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"Value", Percentage.Type}},
        "de-DE")
in
    #"Transform Columns"
```

Result: 
```powerquery
#table(type table [Date = text, Customer ID = text, Value = Percentage.Type],
{
    {"12.03.2024", "134282", .24368},
    {"30.05.2024", "44343", .03556},
    {"14.12.2023", "22", .3834}
})
```


### Example #4
对 `culture` 的记录值应用转换。
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"NewColumn", type number}},
        [Culture="fr-FR", MissingField=MissingField.UseNull]
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text, NewColumn = number],
{
    {"JS-464", "USA", "24/03/2024", null},
    {"LT-331", "France", "05/10/2024", null},
    {"XE-100", "USA", "21/05/2024", null},
    {"RT-430", "Germany", "18/01/2024", null},
    {"LS-005", "France", "31/12/2023", null},
    {"UW-220", "Germany", "25/02/2024", null}
})
```




## Category
Table.Transformation
