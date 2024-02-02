---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Ajoute une colonne portant le nom spécifié. La valeur est calculée à l&#39;aide de la fonction de sélection spécifiée en considérant chaque ligne comme une entrée.


## Syntax

```powerquery
Table.AddColumn(
    table as table,
    newColumnName as text,
    columnGenerator as function,
    optional columnType as type
) as table
```


## Details

Ajoute une colonne nommée <code>newColumnName</code> à la table <code>table</code>. Les valeurs de la colonne sont calculées à l'aide de la fonction de sélection spécifiée <code>columnGenerator</code> en considérant chaque ligne comme une entrée.


## Examples

### Example #1 
Ajoute une colonne de nombres nommée &#34; TotalPrice &#34; à la table, où chaque valeur est la somme des colonnes [Price] et colonne [Shipping].
```powerquery
Table.AddColumn(
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0, Shipping = 10.00],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0, Shipping = 15.00],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0, Shipping = 10.00]
    }),
    "TotalPrice",
    each [Price] + [Shipping],
    type number
)
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100, Shipping = 10, TotalPrice = 110],
    [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5, Shipping = 15, TotalPrice = 20],
    [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25, Shipping = 10, TotalPrice = 35]
})
```




## Category
Table.Transformation
