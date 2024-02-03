---
title: List.Union
---

# List.Union


## Description

Mengembalikan kesatuan nilai senarai yang ditemui dalam input.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Mengambil senarai bagi senarai <code>lists</code>, menyatukan item dalam senarai individu dan mengembalikannya dalam senarai output. Sebagai hasil, senarai yang dikembalikan mengandungi semua item dalam sebarang senarai input.     Operasi ini mengekalkan semantik beg tradisional, maka nilai pendua dipadankan sebagai sebahagian daripada Kesatuan.     Nilai kriteria persamaan pilihan, <code>equationCriteria</code>, boleh ditentukan untuk mengawal ujian persamaan. 


## Examples

### Example #1 
Cipta kesatuan daripada senarai \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
