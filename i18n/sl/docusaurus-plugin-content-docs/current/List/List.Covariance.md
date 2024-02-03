---
title: List.Covariance
---

# List.Covariance


## Description

Vrne kovarianco med dvema seznamoma števil.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Vrne kovarianco med dvema seznamoma, <code>numberList1</code> in <code>numberList2</code>. <code>numberList1</code> in <code>numberList2</code> morata vsebovati enako število vrednosti <code>number</code>.


## Examples

### Example #1 
Izračunajte kovarianco med dvema seznamoma.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
