---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


特定のカルチャを使用して、\{ column, type \} という形式の型変換を適用します。


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

オプションのカルチャを使用して、指定した列に変換操作を適用してテーブルを返します。

-   `table`: 変換する入力テーブル。
-   `typeTransformations`: 適用する型変換。単一の変換の形式は \{ column name, type value \} です。変換のリストを使用すると、一度に複数の列の型を変更できます。列が存在しない場合は、エラーが発生します。
-   `culture`: (省略可能) 列の型を変換するときに使用するカルチャ (例: "en-US")。`culture` にレコードが指定されている場合は、次のフィールドを含めることができます:
    -   `Culture`: 列の型を変換するときに使用するカルチャ (例: "en-US")。
    -   `MissingField`: 列が存在しない場合、このフィールドに代替動作 (`MissingField.UseNull` または `MissingField.Ignore` など) が指定されていない限り、エラーが発生します。

`typeTransformations` パラメーターの型の値には、`any`、すべての `number` 型、`text`、すべての `date`、`time`、`datetime`、`datetimezone`、`duration` 型、`logical`、または `binary` のいずれかを指定できます。`list`、`record`、`table`、または `function` 型は、このパラメーターには無効です。  
  
`typeTransformations` のリストに含まれる各列について、指定された型の値に対応する ".From" メソッドは、通常、変換を実行するために使用されます。たとえば、`Currency.Type` 型の値が列に指定されている場合、変換関数 `Currency.From` がその列の各値に適用されます。


## Examples

### Example #1
最初の列の数値をテキスト値に変換します。
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
テーブル内の日付をフランス語のテキストに変換します。
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
テーブル内の日付をドイツ語と同等のテキストに変換し、テーブルの値をパーセンテージに変換します。
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
`culture` のレコード値を使用して変換を適用します。
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
