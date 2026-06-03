---
title: List.Covariance
---

# List.Covariance


Retourneert de covariantie tussen de twee lijsten met getallen.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Retourneert de covariantie tussen de twee lijsten `numberList1` en `numberList2`. `numberList1` en `numberList2` moeten hetzelfde aantal `number`waarden bevatten.


## Examples

### Example #1
De covariantie tussen de twee lijsten berekenen.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
