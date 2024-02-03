---
title: Table.InsertRows
---

# Table.InsertRows


## Description

Вставляє список рядків у вказану позицію в таблиці.


## Syntax

```powerquery
Table.InsertRows(
    table as table,
    offset as number,
    rows as list
) as table
```


## Details

Повертає таблицю зі списком рядків, <code>rows</code>, вставлених у <code>table</code> у вказану позицію, <code>offset</code>. Кожний стовпець у рядку для вставлення повинен мати типи стовпців таблиці.


## Examples

### Example #1 
Вставити рядок у таблицю в позицію 1.
```powerquery
Table.InsertRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    1,
    {[CustomerID = 3, Name = "Paul", Phone = "543-7890"]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Вставити два рядки в таблицю в позицію 1.
```powerquery
Table.InsertRows(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    1,
    {
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
