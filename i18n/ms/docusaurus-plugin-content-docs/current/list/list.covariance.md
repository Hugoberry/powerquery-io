---
title: List.Covariance
---

# List.Covariance


Mengembalikan kovarians antara dua senarai nombor.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Mengembalikan kovarians antara dua senarai, `numberList1` dan `numberList2`. `numberList1` dan `numberList2` mesti mengandungi bilangan nilai `number` yang sama.


## Examples

### Example #1
Kira kovarians antara dua senarai.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
