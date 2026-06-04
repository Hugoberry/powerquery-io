---
title: Table.StopFolding
---

# Table.StopFolding


Neļauj jebkādu lejupstraumes darbību palaišanu pret oriģinālo datu avotu.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Neļauj jebkādu lejupstraumes darbību palaišanu pret oriģinālo datu avotu līdzeklī `table`.


## Examples

### Example #1
Ienes datus no SQL tabulas veidā, kas neļauj lejupstraumes darbības palaist kā pieprasījumu SQL serverī.
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
