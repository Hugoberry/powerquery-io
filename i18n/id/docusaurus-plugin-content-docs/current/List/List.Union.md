---
title: List.Union
---

# List.Union


## Description

Menghasilkan penyatuan nilai daftar yang ditemukan dalam input.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Mengambil daftar berisi daftar <code>lists</code>, menyatukan item dalam daftar terpisah, dan mengembalikannya dalam daftar output. Dengan demikian, daftar yang dikembalikan akan berisi semua item dalam daftar input apa pun.    Operasi ini mempertahankan semantik ganda tradisional, sehingga nilai duplikat dicocokkan sebagai bagian dari Gabungan.    Nilai kriteria persamaan opsional, <code>equationCriteria</code>, dapat ditetapkan untuk mengontrol pengujian persamaan. 


## Examples

### Example #1 
Membuat penyatuan daftar \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
