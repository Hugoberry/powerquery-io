---
title: List.Covariance
---

# List.Covariance


## Description

Restituisce la covarianza tra due elenchi di numeri.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Restituisce la covarianza tra due elenchi, <code>numberList1</code> e <code>numberList2</code>. <code>numberList1</code> e <code>numberList2</code> devono contenere lo stesso numero di valori <code>number</code>.


## Examples

### Example #1 
Calcolare la covarianza tra due elenchi.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
