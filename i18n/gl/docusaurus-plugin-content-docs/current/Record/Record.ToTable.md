---
title: Record.ToTable
---

# Record.ToTable


## Description

Devolve unha táboa na que cada fila é un nome de campo e o valor do rexistro de entrada.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Devolve unha táboa que contén as columnas <code>Name</code> e <code>Value</code> cunha fila por cada campo de <code>record</code>.


## Examples

### Example #1 
Devolver a táboa do rexistro.
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
