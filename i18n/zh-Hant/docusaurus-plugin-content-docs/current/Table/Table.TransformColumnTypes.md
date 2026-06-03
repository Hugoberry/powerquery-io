---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


使用特定文化特性來套用 \{ column, type \} 格式的類型轉換。


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

使用選用文化特性將轉換作業套用在指定的資料行，以傳回資料表。

-   `table`: 要轉換的輸入資料表。
-   `typeTransformations`: 要套用的類型轉換。單一轉換的格式為 \{ column name, type value \}。轉換清單可以用來一次變更一個以上的資料行類型。如果資料行不存在，則引發錯誤。
-   `culture`:(選擇性) 轉換資料行類型時所要使用的文化特性 (例如“en-US”)。如果為 `culture` 指定了記錄，它可能包含下列欄位:
    -   `Culture`: 轉換資料行類型時所要使用的文化特性 (例如 "en-US")。
    -   `MissingField`: 如果資料行不存在，除非此欄位提供替代行為 (例如 `MissingField.UseNull` 或 `MissingField.Ignore`)，否則會引發錯誤。

`typeTransformations` 參數中的類型值可以是 `any`、所有`number`類型、`text`、所有`date`、`time`、`datetime`、`datetimezone`和`duration`類型、`logical` 或 `binary`。`list`、`record`、`table` 或 `function` 類型對此參數無效。  
  
針對列於 `typeTransformations` 的每個資料行，對應到指定類型值的 ".From" 方法通常會用來執行轉換。例如，如果針對資料行，提供 `Currency.Type` 類型值，轉換函數 `Currency.From` 會套用至該資料行中的每個值。


## Examples

### Example #1
將第一個資料行中的數字值轉換成文字值。
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
將數據表中的日期轉換成法文文字等價專案。
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
將數據表中的日期轉換為其德文相等文字，並將數據表中的值轉換為百分比。
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
套用含有 `culture` 之記錄值的轉換。
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
