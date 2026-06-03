---
title: List.Product
---

# List.Product


Devolve o produto dos números existentes na lista.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Devolve o produto dos números não nulos existentes na lista, `numbersList`. Devolve nulo se não existirem valores não nulos na lista.


## Examples

### Example #1
Determinar o produto dos números existentes na lista `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
