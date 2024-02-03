---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Запобігає виконанню будь-яких подальших операцій для вихідного джерела даних.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Запобігає виконанню будь-яких подальших операцій для вихідного джерела даних у <code>table</code>.


## Examples

### Example #1 
Отримує дані з таблиці SQL таким чином, щоб запобігати виконанню будь-яких подальших операцій як запиту на сервері SQL Server.
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
