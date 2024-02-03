---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Neļauj jebkādu lejupstraumes darbību palaišanu pret oriģinālo datu avotu.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Neļauj jebkādu lejupstraumes darbību palaišanu pret oriģinālo datu avotu līdzeklī <code>table</code>.


## Examples

### Example #1 
Ienes datus no SQL tabulas veidā, kas neļauj lejupstraumes darbības palaist kā pieprasījumu SQL serverī.
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
