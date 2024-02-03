---
title: List.Covariance
---

# List.Covariance


## Description

Tiek atgriezta divu skaitļu sarakstu kovariācija.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Tiek atgriezta sarakstu <code>numberList1</code> un <code>numberList2</code> kovariācija. Sarakstos <code>numberList1</code> un <code>numberList2</code> ir jābūt vienādam tipa <code>number</code> vērtību skaitam.


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
