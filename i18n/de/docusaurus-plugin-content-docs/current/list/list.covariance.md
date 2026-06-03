---
title: List.Covariance
---

# List.Covariance


Gibt die Kovarianz zwischen den beiden Zahlenlisten zurück.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Gibt die Kovarianz zwischen zwei Listen ("`numberList1`" und "`numberList2`") zurück. "`numberList1`" und "`numberList2`" müssen die gleiche Anzahl von `number`\-Werten enthalten.


## Examples

### Example #1
Berechnet die Kovarianz zwischen zwei Listen.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
