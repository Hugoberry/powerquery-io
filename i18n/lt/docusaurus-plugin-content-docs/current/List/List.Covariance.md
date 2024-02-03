---
title: List.Covariance
---

# List.Covariance


## Description

Pateikiama dviejų skaičių sąrašų kovariacija.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Pateikiama dviejų sąrašų kovariacija, <code>numberList1</code> ir <code>numberList2</code>. <code>numberList1</code> ir <code>numberList2</code> turi būti toks pat <code>number</code> reikšmių skaičius.


## Examples

### Example #1 
Apskaičiuokite dviejų sąrašų kovariaciją.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
