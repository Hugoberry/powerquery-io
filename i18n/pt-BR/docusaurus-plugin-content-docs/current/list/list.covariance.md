---
title: List.Covariance
---

# List.Covariance


Retorna a covariância entre as duas listas de números.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Retorna a covariância entre as duas listas, `numberList1` e `numberList2`. `numberList1` e `numberList2` deve conter o mesmo número de valores `number`.


## Examples

### Example #1
Calcule a covariância entre as duas listas.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
