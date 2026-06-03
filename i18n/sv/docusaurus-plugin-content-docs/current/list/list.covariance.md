---
title: List.Covariance
---

# List.Covariance


Returnerar kovariansen mellan de två listorna med tal.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Returnerar kovariansen mellan två listor, `numberList1` och `numberList2`. `numberList1` och `numberList2` måste innehålla samma antal `number`\-värden.


## Examples

### Example #1
Beräkna kovariansen mellan två listor.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
