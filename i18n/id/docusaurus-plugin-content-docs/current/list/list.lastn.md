---
title: List.LastN
---

# List.LastN


Menghasilkan daftar item terakhir dalam daftar yang ditentukan. Dapat menentukan jumlah nilai yang akan dihasilkan atau kondisi yang memenuhi syarat secara opsional.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Menghasilkan daftar item terakhir atau item dalam daftar yang ditentukan.

-   `list`: Daftar yang akan diperiksa. Jika daftar kosong, akan dikembalikan daftar kosong.
-   `countOrCondition`: (Opsional) Mendukung pengambilan beberapa item atau penyaringan item. Meskipun parameter ini tercantum sebagai opsional, kesalahan terjadi jika nilai ini tidak diberikan atau `null`. Parameter ini dapat ditentukan dengan dua cara:
    -   Jika angka ditentukan, akan dikembalikan item sebanyak jumlah tersebut.
    -   Jika kondisi ditentukan, semua item yang memenuhi kondisi tersebut akan dikembalikan, dimulai dari akhir daftar. Begitu item gagal memenuhi kondisi, tidak ada item lebih lanjut yang akan dipertimbangkan.


## Examples

### Example #1
Mencari nilai terakhir dalam daftar \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Mencari nilai terakhir dalam daftar \{3, 4, 5, -1, 7, 8, 2\} yang lebih besar dari 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
