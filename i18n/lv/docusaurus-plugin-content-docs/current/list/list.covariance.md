---
title: List.Covariance
---

# List.Covariance


Tiek atgriezta divu skaitļu sarakstu kovariācija.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Tiek atgriezta sarakstu `numberList1` un `numberList2` kovariācija. Sarakstos `numberList1` un `numberList2` ir jābūt vienādam tipa `number` vērtību skaitam.


## Examples

### Example #1
Aprēķiniet divu sarakstu kovariāciju.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
