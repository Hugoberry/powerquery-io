---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Prepreči izvajanje vseh operacij v strežniku navzdol v izvirnem viru podatkov.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Prepreči izvajanje vseh operacij v strežniku navzdol v izvirnem viru podatkov v storitvi <code>table</code>.


## Examples

### Example #1 
Pridobi podatke iz tabele SQL na način, ki preprečuje izvajanje vseh operacij v strežniku SQL kot poizvedbo.
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
