---
title: List.Covariance
---

# List.Covariance


Zwraca kowariancję dwóch list z liczbami.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Zwraca kowariancję dwóch list z liczbami — <code>numberList1</code> i <code>numberList2</code>. Listy <code>numberList1</code> i <code>numberList2</code> muszą zawierać taką samą liczbę wartości typu <code>number</code>.


## Examples

### Example #1 
Oblicz kowariancję dwóch list.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
