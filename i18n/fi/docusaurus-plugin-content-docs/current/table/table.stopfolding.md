---
title: Table.StopFolding
---

# Table.StopFolding


Estää jatkotoimintojen suorittamisen tietojen alkuperäiselle lähteelle.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Estää jatkotoimintojen suorittamisen `table` tietojen alkuperäiselle lähteelle.


## Examples

### Example #1
Noutaa tiedot SQL-taulukosta tavalla, joka estää jatkotoimintojen suorittamisen kyselynä SQL-palvelimessa.
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
