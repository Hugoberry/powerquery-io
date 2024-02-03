---
title: Table.Column
---

# Table.Column


## Description

Повертає вказаний стовпець даних із таблиці у вигляді списку.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Повертає стовпець даних, вказаний <code>column</code>, з таблиці <code>table</code> у вигляді списку.


## Examples

### Example #1 
Повертає значення зі стовпця [Name] у таблиці.
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
