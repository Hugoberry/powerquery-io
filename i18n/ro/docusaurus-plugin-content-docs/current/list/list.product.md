---
title: List.Product
---

# List.Product


Returnează produsul numerelor din listă.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Returnează produsul numerelor care nu au valoarea null din listă, `numbersList`. Returnează null dacă nu există nicio valoare care nu este null în listă.


## Examples

### Example #1
Găsiţi produsul numerelor din lista `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
