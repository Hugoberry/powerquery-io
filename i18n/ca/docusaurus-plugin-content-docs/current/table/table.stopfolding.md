---
title: Table.StopFolding
---

# Table.StopFolding


Impedeix que s'executin operacions descendents comparant-les amb la font de dades original.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Impedeix que s'executin operacions descendents comparant-les amb la font de dades original a `table`.


## Examples

### Example #1
Obté dades d'una taula SQL de tal manera que impedeix que s'executin les operacions de plegament com una consulta a l’SQL Server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    MyLocalTable = Table.StopFolding(MyTable)
in
    MyLocalTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
