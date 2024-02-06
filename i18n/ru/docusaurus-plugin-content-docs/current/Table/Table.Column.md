---
title: Table.Column
---

# Table.Column


Возвращает указанный столбец данных из таблицы в виде списка.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Remarks

Возвращает столбец данных, указанный с помощью <code>column</code>, из таблицы <code>table</code> в виде списка.


## Examples

### Example #1 
Возврат значений из столбца [Name] таблицы.
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
