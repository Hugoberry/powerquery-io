---
title: List.Covariance
---

# List.Covariance


Vrne kovarianco med dvema seznamoma števil.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Vrne kovarianco med dvema seznamoma, `numberList1` in `numberList2`. `numberList1` in `numberList2` morata vsebovati enako število vrednosti `number`.


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
