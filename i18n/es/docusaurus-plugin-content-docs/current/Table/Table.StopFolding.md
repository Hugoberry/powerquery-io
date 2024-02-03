---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Impide que se ejecuten operaciones de nivel inferior en el origen original de los datos.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Impide que se ejecuten operaciones de nivel inferior en el origen original de los datos de <code>table</code>.


## Examples

### Example #1 
Captura datos de una tabla SQL de forma que impide que las operaciones de nivel inferior se ejecuten como una consulta en el servidor SQL Server.
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
