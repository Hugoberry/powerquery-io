---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Mencegah operasi downstream agar tidak dijalankan terhadap sumber data asli.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Mencegah operasi downstream agar tidak dijalankan terhadap sumber data asli di <code>table</code>.


## Examples

### Example #1 
Mengambil data dari tabel SQL dengan cara yang mencegah operasi downstream berjalan sebagai kueri di server SQL.
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
