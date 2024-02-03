---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Sníží úroveň záhlaví sloupců na první řádek hodnot.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Sníží úroveň záhlaví sloupců (např. názvy sloupců) na první řádek hodnot. Výchozí názvy sloupců jsou Sloupec1, Sloupec2 atd.


## Examples

### Example #1 
Umožňuje snížit úroveň prvního řádku hodnot v tabulce.
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
