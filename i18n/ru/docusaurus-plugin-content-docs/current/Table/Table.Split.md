---
title: Table.Split
---

# Table.Split


## Description

Разделяет указанную таблицу на список таблиц с заданным размером страницы.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Разделяет <code>table</code> на список таблиц, где первый элемент списка — таблица с первыми строками (<code>pageSize</code>) из    исходной таблицы, следующий элемент списка — таблица со следующими строками (<code>pageSize</code>) из исходной таблицы и т. д.


## Examples

### Example #1 
Разделите таблицу с пятью записями на таблицы с двумя записями в каждой.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
