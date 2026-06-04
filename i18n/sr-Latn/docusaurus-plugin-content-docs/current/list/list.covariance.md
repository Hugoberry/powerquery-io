---
title: List.Covariance
---

# List.Covariance


Vraća kovarijansu između dve liste brojeva.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Vraća kovarijansu između dve liste, `numberList1` i `numberList2`. `numberList1` i `numberList2` moraju da sadrže isti broj `number` vrednosti.


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
