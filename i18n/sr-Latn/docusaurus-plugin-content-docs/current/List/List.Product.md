---
title: List.Product
---

# List.Product


## Description

Vraća proizvod brojeva sa liste.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Vraća proizvod brojeva sa liste, <code>numbersList</code>, koji nisu bez vrednosti. Vraća rezultat bez vrednosti ako na listi nema vrednosti koje nisu bez vrednosti.


## Examples

### Example #1 
Pronalaženje proizvoda brojeva sa liste &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
