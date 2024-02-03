---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Stulpelių antraštės sumažinamos iki pirmosios reikšmių eilutės.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Stulpelių antraštės (t. y. stulpelių pavadinimai) sumažinami iki pirmosios reikšmių eilutės. Numatytieji stulpelių pavadinimai yra „Column1“, „Column2“ ir t. t.


## Examples

### Example #1 
Sumažinkite pirmąją reikšmių eilutę lentelėje.
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
