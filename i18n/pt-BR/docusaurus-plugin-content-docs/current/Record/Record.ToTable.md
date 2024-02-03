---
title: Record.ToTable
---

# Record.ToTable


## Description

Retorna uma tabela com cada linha sendo um nome de campo e valor do registro de entrada.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Retorna uma tabela que contém as colunas <code>Name</code> e <code>Value</code> com uma linha para cada campo em <code>record</code>.


## Examples

### Example #1 
Retornar a tabela a partir do registro.
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
