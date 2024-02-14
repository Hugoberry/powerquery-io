---
title: List.Covariance
---

# List.Covariance


Devuelve la covarianza entre las dos listas de números.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Devuelve la covarianza entre las dos listas de números, <code>numberList1</code> y <code>numberList2</code>. <code>numberList1</code> y <code>numberList2</code> deben contener el mismo número de valores <code>number</code>.


## Examples

### Example #1 
Calcular la covarianza entre las dos listas de números.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
