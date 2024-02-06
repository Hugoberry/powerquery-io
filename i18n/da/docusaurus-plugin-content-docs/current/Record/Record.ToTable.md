---
title: Record.ToTable
---

# Record.ToTable


Returnerer en tabel, hvor de enkelte rækker er et feltnavn og en værdi for inputposten.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Returnerer en tabel, der indeholder kolonnerne <code>Name</code> og <code>Value</code> med en række for de enkelte felter i <code>record</code>.


## Examples

### Example #1 
Returner tabellen fra posten.
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
