---
title: List.Covariance
---

# List.Covariance


## Description

Palauttaa kahden lukuluettelon välisen kovarianssin.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Palauttaa kahden luettelon (<code>numberList1</code> ja <code>numberList2</code>) välisen kovarianssin. Luetteloiden <code>numberList1</code> ja <code>numberList2</code> on sisällettävä sama määrä <code>number</code>-arvoja.


## Examples

### Example #1 
Laske kahden luettelon välinen kovarianssi.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
