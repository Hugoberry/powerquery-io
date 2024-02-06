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

Retorna a covariância entre as duas listas, <code>numberList1</code> e <code>numberList2</code>. <code>numberList1</code> e <code>numberList2</code> deve conter o mesmo número de valores <code>number</code>.


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
