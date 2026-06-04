---
title: List.Covariance
---

# List.Covariance


Returnează covarianţa dintre cele două liste de numere.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Returnează covarianţa dintre două liste, `numberList1` şi `numberList2`. `numberList1` şi `numberList2` trebuie să conţină acelaşi număr de valori `number`.


## Examples

### Example #1
Calculaţi covarianţa dintre două liste.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
