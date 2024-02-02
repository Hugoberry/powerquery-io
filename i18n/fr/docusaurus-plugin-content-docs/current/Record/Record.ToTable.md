---
title: Record.ToTable
---

# Record.ToTable


## Description

Retourne une table où chaque ligne correspond à un nom de champ et à une valeur de l&#39;enregistrement d&#39;entrée.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Retourne une table qui contient les colonnes <code>Name</code> et <code>Value</code> avec une ligne pour chaque champ dans <code>record</code>.


## Examples

### Example #1 
Retourne la table à partir de l&#39;enregistrement.
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
