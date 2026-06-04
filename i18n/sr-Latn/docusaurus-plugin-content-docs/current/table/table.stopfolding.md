---
title: Table.StopFolding
---

# Table.StopFolding


Sprečava izvršavanje svih posledičnih operacija u odnosu na originalni izvor podataka.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Sprečava izvršavanje svih posledičnih operacija u odnosu na originalni izvor podataka u `table`.


## Examples

### Example #1
Preuzima podatke iz SQL tabele na način koji sprečava da se bilo kakve posledične operacije izvrše kao upit na SQL serveru.
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
