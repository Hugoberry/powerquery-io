---
title: Table.StopFolding
---

# Table.StopFolding


Impede que operações downstream sejam executadas em relação à fonte original dos dados.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Impede que operações downstream sejam executadas em relação à fonte original dos dados no <code>table</code>.


## Examples

### Example #1 
Busca dados de uma tabela SQL de uma forma que impede a execução de operações downstream como uma consulta no SQL Server.
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
