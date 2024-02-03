---
title: List.Covariance
---

# List.Covariance


## Description

Vráti kovarianciu medzi dvomi zoznamami čísel.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Vráti kovarianciu medzi dvomi zoznamami <code>numberList1</code> a <code>numberList2</code>. <code>numberList1</code> a <code>numberList2</code> musia obsahovať rovnaký počet hodnôt <code>number</code>.


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
