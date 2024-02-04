---
title: Record.ToTable
---

# Record.ToTable


## Description

Devolve uma tabela em que cada linha é um nome de campo e o valor do registo de entrada.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Devolve uma tabela que contém as colunas <code>Name</code> e <code>Value</code> com uma linha para cada campo existente em <code>record</code>.


## Examples

### Example #1 
Devolver a tabela a partir do registo.
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
