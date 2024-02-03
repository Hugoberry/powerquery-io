---
title: List.Covariance
---

# List.Covariance


## Description

Returnerer kovariancen mellem de to lister med tal.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Returnerer kovariancen mellem to lister, <code>numberList1</code> og <code>numberList2</code>. <code>numberList1</code> og <code>numberList2</code> skal indeholde det samme antal værdier af typen <code>number</code>.


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
