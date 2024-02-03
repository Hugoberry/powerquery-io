---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Meggátolja, hogy alsóbb rétegbeli műveletek fussanak az adatok eredeti forrásán.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Meggátolja, hogy alsóbb rétegbeli műveletek fussanak az adatok eredeti forrásán a következőben: <code>table</code>.


## Examples

### Example #1 
Adatokat hív le egy SQL-táblából oly módon, hogy megakadályozza, hogy bármely alsóbb rétegbeli művelet lekérdezésként fusson az SQL-kiszolgálón.
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
