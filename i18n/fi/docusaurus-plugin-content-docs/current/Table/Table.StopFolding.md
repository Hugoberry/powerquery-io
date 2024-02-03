---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Estää jatkotoimintojen suorittamisen tietojen alkuperäiselle lähteelle.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Estää jatkotoimintojen suorittamisen <code>table</code> tietojen alkuperäiselle lähteelle.


## Examples

### Example #1 
Noutaa tiedot SQL-taulukosta tavalla, joka estää jatkotoimintojen suorittamisen kyselynä SQL-palvelimessa.
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
