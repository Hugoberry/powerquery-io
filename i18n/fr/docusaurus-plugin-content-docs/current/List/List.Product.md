---
title: List.Product
---

# List.Product


## Description

Retourne le produit des nombres dans la liste.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Retourne le produit des nombres non null dans la liste, <code>numbersList</code>. Retourne null s'il n'y a pas de valeur non null dans la liste.


## Examples

### Example #1 
Recherche le produit des nombres dans la liste &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
