---
title: List.Product
---

# List.Product


Vraća proizvod brojeva sa liste.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Vraća proizvod brojeva sa liste, `numbersList`, koji nisu bez vrednosti. Vraća rezultat bez vrednosti ako na listi nema vrednosti koje nisu bez vrednosti.


## Examples

### Example #1
Pronalaženje proizvoda brojeva sa liste `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
