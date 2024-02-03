---
title: List.Covariance
---

# List.Covariance


## Description

İki sayı listesi arasındaki kovaryansı döndürür.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

<code>numberList1</code> ve <code>numberList2</code> sayı listeleri arasındaki kovaryansı döndürür. <code>numberList1</code> ve <code>numberList2</code> aynı sayıda <code>number</code> değerini içermelidir.


## Examples

### Example #1 
İki liste arasındaki kovaryansı hesaplar.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
