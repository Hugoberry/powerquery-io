---
title: Record.ToTable
---

# Record.ToTable


## Description

Devuelve una tabla en la que cada fila es un nombre de campo y un valor del registro de entrada.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Devuelve una tabla que contiene las columnas <code>Name</code> y <code>Value</code> con una fila para cada campo en <code>record</code>.


## Examples

### Example #1 
Devolver la tabla del registro.
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
