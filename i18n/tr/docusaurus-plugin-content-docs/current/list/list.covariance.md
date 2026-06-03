---
title: List.Covariance
---

# List.Covariance


İki sayı listesi arasındaki kovaryansı döndürür.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

`numberList1` ve `numberList2` sayı listeleri arasındaki kovaryansı döndürür. `numberList1` ve `numberList2` aynı sayıda `number` değerini içermelidir.


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
