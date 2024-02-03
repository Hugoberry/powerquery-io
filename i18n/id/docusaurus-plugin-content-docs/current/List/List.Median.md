---
title: List.Median
---

# List.Median


## Description

Menghasilkan nilai median dalam daftar.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Mengembalikan item median daftar <code>list</code>. Fungsi ini menghasilkan <code>null</code> jika daftar tidak berisi nilai bukan<code>null</code>.    Jika ada angka genap pada item, fungsi memilih yang lebih kecil dari dua item rata-rata kecuali daftar    semuanya terdiri dari tanggalwaktu, durasi, angka atau waktu, yang menghasilkan rata-rata dua item.


## Examples

### Example #1 
Mencari median dari daftar &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
