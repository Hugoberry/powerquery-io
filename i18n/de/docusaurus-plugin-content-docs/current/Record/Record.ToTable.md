---
title: Record.ToTable
---

# Record.ToTable


Gibt eine Tabelle zurück, in der jede Zeile ein Feldname und Wert des Eingabedatensatzes ist.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Gibt eine Tabelle mit den Spalten <code>Name</code> und <code>Value</code> sowie mit je einer Zeile für die einzelnen Felder in "<code>record</code>" zurück.


## Examples

### Example #1 
Gibt die Tabelle aus dem Datensatz zurück.
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
