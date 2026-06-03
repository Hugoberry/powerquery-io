---
title: Table.FromRecords
---

# Table.FromRecords


Преобразует список записей в таблицу.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Преобразует указанный список записей в таблицу.

-   `records`: список записей, который нужно преобразовать в таблицу.
-   `columns`: (необязательно) список имен столбцов таблицы или тип таблицы.
-   `missingField`: (необязательно) указывает, как обрабатывать поля, отсутствующие в строке. Используйте одно из следующих значений:
    -   `MissingField.Error`: для любых отсутствующих полей будет возникать ошибка (по умолчанию).
    -   `MissingField.UseNull`: любые отсутствующие поля будут заполняться значениями `null`.
      
    Если использовать `MissingField.Ignore` в этом параметре, возникнет ошибка.


## Examples

### Example #1
Создать таблицу из записей с помощью имен полей записей в качестве имен столбцов.
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
Создать таблицу из записей с введенными столбцами и выбрать числовые столбцы.
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
Создать таблицу, содержащую имена, инициалы второго имени и фамилии клиентов из указанны записей. Если какие-либо значения отсутствуют, заменить их на `null`.
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
