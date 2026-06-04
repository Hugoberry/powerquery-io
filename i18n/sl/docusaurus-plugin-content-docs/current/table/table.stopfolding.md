---
title: Table.StopFolding
---

# Table.StopFolding


Prepreči izvajanje vseh operacij v strežniku navzdol v izvirnem viru podatkov.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Prepreči izvajanje vseh operacij v strežniku navzdol v izvirnem viru podatkov v storitvi `table`.


## Examples

### Example #1
Pridobi podatke iz tabele SQL na način, ki preprečuje izvajanje vseh operacij v strežniku SQL kot poizvedbo.
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
