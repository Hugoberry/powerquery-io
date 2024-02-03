---
title: List.Range
---

# List.Range


## Description

Menghasilkan subkumpulan daftar yang dimulai pada offset.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Menghasilkan subkumpulan daftar yang dimulai pada offset <code>list</code>. Parameter opsional, <code>offset</code>, menentukan jumlah item maksimum dalam subkumpulan.


## Examples

### Example #1 
Mencari subkumpulan yang dimulai pada offset 6 dari daftar angka 1 hingga 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Mencari subkumpulan dengan panjang 2 dari offset 6, dari daftar angka 1 hingga 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
