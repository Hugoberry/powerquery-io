---
title: List.Median
---

# List.Median


Menghasilkan nilai median dalam daftar.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Mengembalikan item median daftar `list`. Fungsi ini menghasilkan `null` jika daftar tidak berisi nilai bukan`null`. Jika ada angka genap pada item, fungsi memilih yang lebih kecil dari dua item rata-rata kecuali daftar semuanya terdiri dari tanggalwaktu, durasi, angka atau waktu, yang menghasilkan rata-rata dua item.


## Examples

### Example #1
Mencari median dari daftar `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
