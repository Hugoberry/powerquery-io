---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Evita a execución de operacións cara a niveis inferiores no código orixinal dos datos.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Evita a execución de operacións cara a niveis inferiores no código orixinal dos datos de <code>table</code>.


## Examples

### Example #1 
Obtén datos dunha táboa SQL de modo que evita a execución de operacións cara a niveis inferiores como consultas no servidor SQL Server.
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
