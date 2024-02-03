---
title: Table.Combine
---

# Table.Combine


## Description

Повертає таблицю, яка є результатом об&#39;єднання списку таблиць.


## Syntax

```powerquery
Table.Combine(
    tables as list,
    optional columns as any
) as table
```


## Details

Повертає таблицю, отриману в результаті об’єднання списку таблиць "<code>tables</code>". Отримана таблиця матиме структуру типу рядка, визначену параметром "<code>columns</code>", а якщо "<code>columns</code>" не вказано – об’єднанням вхідних типів.


## Examples

### Example #1 
Об’єднати три таблиці.
```powerquery
Table.Combine({
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]}),
    Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})
})
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Об’єднати три таблиці з різними структурами.
```powerquery
Table.Combine({
    Table.FromRecords({[Name = "Bob", Phone = "123-4567"]}),
    Table.FromRecords({[Fax = "987-6543", Phone = "838-7171"]}),
    Table.FromRecords({[Cell = "543-7890"]})
})
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Phone = "123-4567", Fax = null, Cell = null],
    [Name = null, Phone = "838-7171", Fax = "987-6543", Cell = null],
    [Name = null, Phone = null, Fax = null, Cell = "543-7890"]
})
```


### Example #3 
Об’єднати дві таблиці та проект у заданий тип.
```powerquery
Table.Combine(
    {
        Table.FromRecords({[Name = "Bob", Phone = "123-4567"]}),
        Table.FromRecords({[Fax = "987-6543", Phone = "838-7171"]}),
        Table.FromRecords({[Cell = "543-7890"]})
    },
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = null, Name = "Bob"],
    [CustomerID = null, Name = null],
    [CustomerID = null, Name = null]
})
```




## Category
Table.Row operations
