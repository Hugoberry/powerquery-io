---
title: List.Product
---

# List.Product


Retorna o produto dos números na lista.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Retorna o produto dos números não nulos na lista, `numbersList`. Retornará um valor nulo se não houver valores não nulos na lista.


## Examples

### Example #1
Localize o produto dos números na lista `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
