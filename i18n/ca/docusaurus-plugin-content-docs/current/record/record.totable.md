---
title: Record.ToTable
---

# Record.ToTable


Retorna una taula en què cada fila és un nom de camp i un valor del registre d'entrada.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Retorna una taula que conté les columnes `Name` i `Value` amb una fila per a cada camp a `record`.


## Examples

### Example #1
Retorna la taula del registre.
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
