---
title: List.Covariance
---

# List.Covariance


Menghasilkan kovarian di antara kedua daftar angka.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Menghasilkan kovarian di antara kedua daftar, `numberList1` dan `numberList2`. `numberList1` dan `numberList2` harus berisi jumlah nilai `number` yang sama.


## Examples

### Example #1
Menghitung kovarian di antara kedua daftar.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
