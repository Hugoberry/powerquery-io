---
title: Record.ToTable
---

# Record.ToTable


## Description

Restituisce una tabella in cui ogni riga contiene il valore e il nome di un campo del record di input.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Restituisce una tabella contenente le colonne <code>Name</code> e <code>Value</code> con una riga per ogni campo in <code>record</code>.


## Examples

### Example #1 
Restituire la tabella dal record.
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
