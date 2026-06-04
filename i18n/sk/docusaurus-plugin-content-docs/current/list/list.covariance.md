---
title: List.Covariance
---

# List.Covariance


Vráti kovarianciu medzi dvomi zoznamami čísel.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Vráti kovarianciu medzi dvomi zoznamami `numberList1` a `numberList2`. `numberList1` a `numberList2` musia obsahovať rovnaký počet hodnôt `number`.


## Examples

### Example #1
Vypočítajte kovarianciu medzi dvomi zoznamami.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
