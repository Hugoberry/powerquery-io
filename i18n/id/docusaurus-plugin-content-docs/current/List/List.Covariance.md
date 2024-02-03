---
title: List.Covariance
---

# List.Covariance


## Description

Menghasilkan kovarian di antara kedua daftar angka.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Menghasilkan kovarian di antara kedua daftar, <code>numberList1</code> dan <code>numberList2</code>. <code>numberList1</code> dan <code>numberList2</code> harus berisi jumlah nilai <code>number</code> yang sama.


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
