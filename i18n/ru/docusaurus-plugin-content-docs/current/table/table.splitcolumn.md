---
title: Table.SplitColumn
---

# Table.SplitColumn


Разбивает указанный столбец на набор дополнительных столбцов, используя указанную функцию разделителя.


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Remarks

Разделяет указанный столбец на набор дополнительных столбцов, используя указанную функцию разделителя.

-   `table`: таблица, содержащая столбец для разделения.
-   `sourceColumn`: имя столбца для разделения.
-   `splitter` : Функция разделителя, используемая для разделения столбца (например, `Splitter.SplitTextByDelimiter` или `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: список имен новых столбцов для создания или количество новых столбцов.
-   `default`: переопределяет значение, используемое, если для заполнения всех новых столбцов недостаточно разделенных значений. Значение по умолчанию для этого параметра — `null`.
-   `extraColumns` : Указывает, что делать, если разделенных значений может быть больше, чем новых столбцов. В этот параметр можно передать значение перечисления `ExtraValues.Type`. Значение по умолчанию — `ExtraValues.Ignore`.


## Examples

### Example #1
Разделите столбец "Имя" на имя и фамилию.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "))
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, Name.1 = text, Name.2 = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #2
Разделите столбец "Имя" на имя и фамилию, затем переименуйте новые столбцы.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"})
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #3
Разделите столбец "Имя" на имя и фамилию, переименуйте новые столбцы и заполните все пробелы строкой "-Нет записи-".
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        "-No Entry-")
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", "-No Entry-", "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #4
Разделите столбец "Имя" на имя и фамилию, затем переименуйте новые столбцы. Поскольку значений может быть больше, чем количество доступных столбцов, сделайте столбец фамилии списком, включающим все значения после имени.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul Green", "543-7890"},
        {4, "Cristina J. Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        null,
        ExtraValues.List)
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", {"White"}, "123-4567"},
    {2, "Jim", {"Smith"}, "987-6543"},
    {3, "Paul", {"Green"}, "543-7890"},
    {4, "Cristina", {"J.", "Best"}, "232-1550"}
})
```




## Category
Table.Transformation
