---
title: List.Covariance
---

# List.Covariance


## Description

Vraća kovarijansu između dve liste brojeva.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Vraća kovarijansu između dve liste, <code>numberList1</code> i <code>numberList2</code>. <code>numberList1</code> i <code>numberList2</code> moraju da sadrže isti broj <code>number</code> vrednosti.


## Examples

### Example #1 
Izračunavanje kovarijanse između dve liste.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
