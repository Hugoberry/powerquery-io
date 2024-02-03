---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Zabraňuje spusteniu všetkých následných operácií v pôvodnom zdroji údajov.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Zabraňuje spusteniu všetkých následných operácií v pôvodnom zdroji údajov v <code>table</code>.


## Examples

### Example #1 
Načíta údaje z tabuľky SQL spôsobom, ktorý zabraňuje spusteniu všetkých následných operácií ako dotazu na SQL serveri.
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
