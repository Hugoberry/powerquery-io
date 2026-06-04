---
title: Record.ToTable
---

# Record.ToTable


Palauttaa taulukon, jonka kunkin rivi on syötetietueen kentän nimi ja arvo.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Palauttaa taulukon, joka sisältää sarakkeet `Name` ja `Value` sekä rivin kullekin kentälle kohteessa `record`.


## Examples

### Example #1
Palauta taulukko tietueesta.
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
