---
title: Record.ToTable
---

# Record.ToTable


Pateikiama lentelė, kurios kiekvienoje eilutėje nurodomas lauko pavadinimas ir įvesties įrašo reikšmė.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Pateikiama lentelė, kurioje yra stulpeliai `Name` ir `Value` su kiekvieno `record` lauko eilute.


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
