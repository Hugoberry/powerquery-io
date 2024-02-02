---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Empêche toute opération en aval d’être exécutée sur la source d’origine des données.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Empêche toute opération en aval d’être exécutée sur la source d’origine des données dans <code>table</code>.


## Examples

### Example #1 
Récupère les données d’une table SQL de manière à empêcher toute opération en aval de s’exécuter en tant que requête sur le serveur SQL.
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
