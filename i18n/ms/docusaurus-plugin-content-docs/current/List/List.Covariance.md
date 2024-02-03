---
title: List.Covariance
---

# List.Covariance


## Description

Mengembalikan kovarians antara dua senarai nombor.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Mengembalikan kovarians antara dua senarai, <code>numberList1</code> dan <code>numberList2</code>. <code>numberList1</code> dan <code>numberList2</code> mesti mengandungi bilangan nilai <code>number</code> yang sama.


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
