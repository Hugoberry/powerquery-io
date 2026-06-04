---
title: List.Covariance
---

# List.Covariance


Palauttaa kahden lukuluettelon välisen kovarianssin.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Palauttaa kahden luettelon (`numberList1` ja `numberList2`) välisen kovarianssin. Luetteloiden `numberList1` ja `numberList2` on sisällettävä sama määrä `number`\-arvoja.


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
