---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Impedeix que s&#39;executin operacions descendents comparant-les amb la font de dades original.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Impedeix que s'executin operacions descendents comparant-les amb la font de dades original a <code>table</code>.


## Examples

### Example #1 
Obté dades d&#39;una taula SQL de tal manera que impedeix que s&#39;executin les operacions de plegament com una consulta a l’SQL Server.
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
