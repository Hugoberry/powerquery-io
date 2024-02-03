---
title: List.Covariance
---

# List.Covariance


## Description

Retorna la covariància entre les dues llistes de nombres.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Retorna la covariància entre les dues llistes, <code>numberList1</code> i <code>numberList2</code>. <code>numberList1</code> i <code>numberList2</code> han de contenir el mateix nombre de valors <code>number</code>.


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
