---
title: Record.ToTable
---

# Record.ToTable


## Description

Pateikiama lentelė, kurios kiekvienoje eilutėje nurodomas lauko pavadinimas ir įvesties įrašo reikšmė.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Pateikiama lentelė, kurioje yra stulpeliai <code>Name</code> ir <code>Value</code> su kiekvieno <code>record</code> lauko eilute.


## Examples

### Example #1 
Pateikite lentelę iš įrašo.
```powerquery
Record.ToTable([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "OrderID", Value = 1],
    [Name = "CustomerID", Value = 1],
    [Name = "Item", Value = "Fishing rod"],
    [Name = "Price", Value = 100]
})
```




## Category
Record.Serialization
