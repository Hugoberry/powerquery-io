---
title: List.Covariance
---

# List.Covariance


A két számlista közötti kovarianciát adja vissza.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

A két számlista (`numberList1` és `numberList2`) közötti kovarianciát adja vissza. A(z) `numberList1` és a(z) `numberList2` listának azonos számú `number` értéket kell tartalmaznia.


## Examples

### Example #1
Két számlista közötti kovariancia kiszámítása
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
