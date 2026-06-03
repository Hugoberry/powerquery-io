---
title: List.Covariance
---

# List.Covariance


Returnerer kovariancen mellem de to lister med tal.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Returnerer kovariancen mellem to lister, `numberList1` og `numberList2`. `numberList1` og `numberList2` skal indeholde det samme antal værdier af typen `number`.


## Examples

### Example #1
Beregn kovariancen mellem to lister.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
