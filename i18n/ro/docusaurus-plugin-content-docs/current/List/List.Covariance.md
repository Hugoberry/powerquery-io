---
title: List.Covariance
---

# List.Covariance


## Description

Returnează covarianţa dintre cele două liste de numere.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Returnează covarianţa dintre două liste, <code>numberList1</code> şi <code>numberList2</code>. <code>numberList1</code> şi <code>numberList2</code> trebuie să conţină acelaşi număr de valori <code>number</code>.


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
