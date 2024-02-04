---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Impede que quaisquer operações a jusante sejam executadas na origem inicial dos dados.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Impede que quaisquer operações a jusante sejam executadas na origem inicial dos dados em <code>table</code>.


## Examples

### Example #1 
Obtém dados de uma tabela SQL de uma forma que impede que quaisquer operações a jusante sejam executadas como uma consulta no SQL Server.
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
