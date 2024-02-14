---
title: Table.StopFolding
---

# Table.StopFolding


Verilerin özgün kaynağında herhangi bir aşağı akış işleminin çalıştırılmasını önler.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

<code>table</code> içindeki verilerin özgün kaynağında herhangi bir aşağı akış işleminin çalıştırılmasını önler.


## Examples

### Example #1 
SQL tablosundaki verileri herhangi bir aşağı akış işleminin SQL sunucusunda sorgu olarak çalışmasını engelleyecek şekilde getirir.
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
