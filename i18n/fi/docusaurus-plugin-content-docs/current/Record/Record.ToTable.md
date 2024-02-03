---
title: Record.ToTable
---

# Record.ToTable


## Description

Palauttaa taulukon, jonka kunkin rivi on syötetietueen kentän nimi ja arvo.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Palauttaa taulukon, joka sisältää sarakkeet <code>Name</code> ja <code>Value</code> sekä rivin kullekin kentälle kohteessa <code>record</code>.


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
