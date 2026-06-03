---
title: Record.ToTable
---

# Record.ToTable


Retourne une table où chaque ligne correspond à un nom de champ et à une valeur de l'enregistrement d'entrée.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Retourne une table qui contient les colonnes `Name` et `Value` avec une ligne pour chaque champ dans `record`.


## Examples

### Example #1
Retourne la table à partir de l'enregistrement.
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
