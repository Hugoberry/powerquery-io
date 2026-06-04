---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Застосовує перетворення типу форми \{ column, type \} із використанням конкретної культури.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Повертає таблицю, застосовуючи операції перетворення до вказаних стовпців із використанням необов’язкового значення культури.

-   `table`: вхідна таблиця для перетворення.
-   `typeTransformations`: перетворення типів, які потрібно застосувати. Формат для одного перетворення: \{ column name, type value \}. Список перетворень можна використовувати, щоб одночасно змінювати типи кількох стовпців. Якщо стовпець не існує, виникає помилка.
-   `culture`: (необов’язково) культура, яка використовуватиметься для перетворення типів стовпців (наприклад, "uk-UA"). Якщо для `culture` вказано запис, він може містити такі поля:
    -   `Culture`: культура, яка використовуватиметься для перетворення типів стовпців (наприклад, "uk-UA").
    -   `MissingField`: якщо стовпець не існує, виникає помилка, якщо в цьому полі не вказано альтернативну поведінку (наприклад, `MissingField.UseNull` або `MissingField.Ignore`).

Значення типу в параметрі `typeTransformations` може бути `any`, усі типи `number`, `text`, усі типи `date`, `time`, `datetime`, `datetimezone` і `duration`, `logical` або `binary`. Для цього параметра неприпустимі типи `list`, `record`, `table` і `function`.  
  
Для кожного стовпця, зазначеного в `typeTransformations`, для перетворення зазвичай використовується метод ".From", що відповідає вказаному значенню типу. Наприклад, якщо для стовпця вказано значення типу `Currency.Type`, функція перетворення `Currency.From` застосовується до кожного значення в цьому стовпці.


## Examples

### Example #1
Перетворення числових значень у першому стовпці на текстові.
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
Перетворення дат у таблиці на текстові еквіваленти французькою мовою.
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
Перетворення дат у таблиці на текстові еквіваленти німецькою мовою, а значення в таблиці – на відсоткові значення.
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
Застосувати перетворення зі значенням запису для `culture`.
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
