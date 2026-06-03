---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Применяет преобразование типа формы \{ column, type \}, используя конкретный язык и региональные параметры.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Возвращает таблицу, применяя операции преобразования к указанным столбцам. Возможно использование необязательного языкового стандарта.

-   `table`: входная таблица для преобразования.
-   `typeTransformations`: применяемые преобразования типов. Формат для одного преобразования — \{ column name, type value \}. Можно использовать список преобразований, чтобы изменить типы сразу нескольких столбцов. Если какой-либо столбец отсутствует, возникает ошибка.
-   `culture` : (Необязательно) Культура, используемая при преобразовании типов столбцов (например, "en-US"). Если запись указана для `culture`, она может содержать следующие поля:
    -   `Культура`: Культура, используемая при преобразовании типов столбцов (например, "en-US").
    -   `MissingField`: Если столбец отсутствует, возникает ошибка, если только данное поле не предписывает иное поведение (например, `MissingField.UseNull` или `MissingField.Ignore`).

Возможные значения типа параметра `typeTransformations`: `any`, любые типы `number`, `text`, а также все типы `date`, `time`, `datetime`, `datetimezone` и `duration`, `logical` или `binary`. Типы `list`, `record`, `table` и `function` недопустимы для этого параметра.  
  
Для каждого столбца, перечисленного в `typeTransformations`, для выполнения преобразования обычно используется метод ".From", соответствующий указанному значению типа. Например, если для столбца указан тип `Currency.Type`, функция преобразования `Currency.From` применяется к каждому значению в столбце.


## Examples

### Example #1
Преобразование числовых значений в первом столбце в текстовые значения.
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
Преобразование дат в таблице в их текстовые эквиваленты во Франции.
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
Преобразование дат в таблице в их текстовые эквиваленты для немецкого языка, а значения в таблице — в процентные значения.
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
Применить преобразования со значением-записью для параметра `culture`.
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
