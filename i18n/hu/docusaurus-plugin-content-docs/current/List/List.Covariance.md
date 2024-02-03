---
title: List.Covariance
---

# List.Covariance


## Description

A két számlista közötti kovarianciát adja vissza.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

A két számlista (<code>numberList1</code> és <code>numberList2</code>) közötti kovarianciát adja vissza. A(z) <code>numberList1</code> és a(z) <code>numberList2</code> listának azonos számú <code>number</code> értéket kell tartalmaznia.


## Examples

### Example #1 
Két számlista közötti kovariancia kiszámítása
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
