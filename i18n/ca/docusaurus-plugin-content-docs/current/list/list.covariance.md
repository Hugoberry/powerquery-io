---
title: List.Covariance
---

# List.Covariance


Retorna la covariància entre les dues llistes de nombres.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Retorna la covariància entre les dues llistes, `numberList1` i `numberList2`. `numberList1` i `numberList2` han de contenir el mateix nombre de valors `number`.


## Examples

### Example #1
Calcula la covariància entre les dues llistes de nombres.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
