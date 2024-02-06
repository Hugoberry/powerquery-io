---
title: Table.StopFolding
---

# Table.StopFolding


Zapobiega uruchamianiu jakichkolwiek operacji podrzędnych względem oryginalnego źródła danych.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Zapobiega uruchamianiu jakichkolwiek operacji podrzędnych względem oryginalnego źródła danych w <code>table</code>.


## Examples

### Example #1 
Pobiera dane z tabeli SQL w sposób uniemożliwiający uruchamianie jakichkolwiek operacji podrzędnych jako zapytania na serwerze SQL.
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
