---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Neleidžia vykdyti jokių proceso pabaigos operacijų pagal pirminį duomenų šaltinį.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Neleidžia vykdyti jokių proceso pabaigos operacijų pagal pirminį duomenų šaltinį <code>table</code>.


## Examples

### Example #1 
Gauna duomenis iš SQL lentelės taip, kad nebūtų vykdomos jokios proceso pabaigos operacijos kaip užklausa SQL serveryje.
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
