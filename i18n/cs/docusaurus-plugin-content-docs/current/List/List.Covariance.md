---
title: List.Covariance
---

# List.Covariance


## Description

Vrátí kovarianci mezi dvěma seznamy čísel.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Vrátí kovarianci mezi dvěma seznamy <code>numberList1</code> a <code>numberList2</code>. Seznamy <code>numberList1</code> a <code>numberList2</code> musí obsahovat stejný počet hodnot <code>number</code>.


## Examples

### Example #1 
Vypočítá kovarianci mezi dvěma seznamy.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
