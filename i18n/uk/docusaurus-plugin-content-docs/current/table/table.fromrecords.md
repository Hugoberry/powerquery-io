---
title: Table.FromRecords
---

# Table.FromRecords


Перетворює список записів на таблицю.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Перетворює вказаний список записів на таблицю.

-   `records`: список записів, які потрібно перетворити на таблицю.
-   `columns`: (необовʼязково) список назв стовпців таблиці або тип таблиці.
-   `missingField`: (необов'язково) вказівки щодо того, як обробляти відсутні поля в рядку. Використайте одне з таких значень:
    -   `MissingField.Error`: відсутні поля спричиняють помилку (за замовчуванням).
    -   `MissingField.UseNull`: усі відсутні поля включено як значення `null`.
      
    Використання `MissingField.Ignore` у цьому параметрі спричиняє помилку.


## Examples

### Example #1
Створити таблицю на основі записів, використовуючи імена полів записів як імена стовпців.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Створити таблицю на основі записів зі стовпцями вказаного типу й виділити числові стовпці.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Створіть таблицю, що містить ім’я, ініціал по батькові й прізвище клієнтів із вказаних записів. Якщо будь-яке зі значень відсутнє, замініть його на значення `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
