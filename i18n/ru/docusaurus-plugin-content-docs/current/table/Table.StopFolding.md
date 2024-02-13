---
title: Table.StopFolding
---

# Table.StopFolding


Запрещает выполнение последующих операций с исходным источником данных.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Запрещает выполнение последующих операций с исходным источником данных в <code>table</code>.


## Examples

### Example #1 
Извлекает данные из таблицы SQL, чтобы предотвратить выполнение последующих операций в качестве запроса на сервере SQL Server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    MyLocalTable = Table.StopFolding(dbo_MyTable)
in
    MyLocalTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
