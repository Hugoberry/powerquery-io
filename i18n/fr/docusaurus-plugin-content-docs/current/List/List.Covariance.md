---
title: List.Covariance
---

# List.Covariance


Retourne la covariance entre les deux listes de nombres.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Retourne la covariance entre deux listes, <code>numberList1</code> et <code>numberList2</code>. <code>numberList1</code> et <code>numberList2</code> doivent contenir le même nombre de valeurs <code>number</code>.


## Examples

### Example #1 
Calcule la covariance entre deux listes.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
