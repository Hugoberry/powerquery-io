---
title: List.Product
---

# List.Product


Retourne le produit des nombres dans la liste.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Retourne le produit des nombres non null dans la liste, `numbersList`. Retourne null s'il n'y a pas de valeur non null dans la liste.


## Examples

### Example #1
Recherche le produit des nombres dans la liste `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
