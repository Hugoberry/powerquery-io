---
title: List.Covariance
---

# List.Covariance


Pateikiama dviejų skaičių sąrašų kovariacija.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Pateikiama dviejų sąrašų kovariacija, `numberList1` ir `numberList2`. `numberList1` ir `numberList2` turi būti toks pat `number` reikšmių skaičius.


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
