---
title: List.Covariance
---

# List.Covariance


## Description

Gibt die Kovarianz zwischen den beiden Zahlenlisten zurück.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Gibt die Kovarianz zwischen zwei Listen ("<code>numberList1</code>" und "<code>numberList2</code>") zurück. "<code>numberList1</code>" und "<code>numberList2</code>" müssen die gleiche Anzahl von <code>number</code>-Werten enthalten.


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
