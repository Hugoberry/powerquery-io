---
title: Table.StopFolding
---

# Table.StopFolding


Menghalang sebarang operasi hilir daripada dijalankan terhadap sumber asal data.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Menghalang sebarang operasi hilir daripada dijalankan terhadap sumber asal data dalam `table`.


## Examples

### Example #1
Mengambil data daripada jadual SQL dengan cara yang menghalang sebarang operasi hiliran daripada berjalan sebagai pertanyaan pada pelayan SQL.
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
