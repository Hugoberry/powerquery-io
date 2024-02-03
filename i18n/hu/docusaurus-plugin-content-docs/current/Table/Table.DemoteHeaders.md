---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Első értéksorrá minősíti vissza az oszlopfejléceket.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Visszaminősíti az oszlopfejléceket (pl. oszlopneveket) első értéksorrá. Az alapértelmezett oszlopnevek „1. oszlop”, „2. oszlop” és így tovább.


## Examples

### Example #1 
Lefokozza a táblában szereplő értékek első sorát.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations