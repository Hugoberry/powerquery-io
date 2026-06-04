---
title: List.Covariance
---

# List.Covariance


Vrátí kovarianci mezi dvěma seznamy čísel.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Vrátí kovarianci mezi dvěma seznamy `numberList1` a `numberList2`. Seznamy `numberList1` a `numberList2` musí obsahovat stejný počet hodnot `number`.


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
