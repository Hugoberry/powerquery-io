---
title: List.Product
---

# List.Product


Restituisce il prodotto dei numeri nell'elenco.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Restituisce il prodotto dei numeri non Null nell'elenco `numbersList`. Restituisce Null se non sono presenti valori non Null nell'elenco.


## Examples

### Example #1
Trovare il prodotto dei numeri nell'elenco `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
