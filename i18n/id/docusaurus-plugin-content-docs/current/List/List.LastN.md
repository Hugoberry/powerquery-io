---
title: List.LastN
---

# List.LastN


## Description

Menghasilkan nilai terakhir dalam daftar.  Dapat menentukan jumlah nilai yang akan dihasilkan atau kondisi yang memenuhi syarat secara opsional.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Menghasilkan item terakhir dari daftar <code>list</code>. Jika daftar kosong, pengecualian akan dibuat. Fungsi ini memerlukan parameter opsional, <code>countOrCondition</code>, untuk mendukung pengumpulan beberapa item atau pemfilteran item. <code>countOrCondition</code> dapat ditetapkan dengan tiga cara: <ul>  <li>Jika jumlah ditetapkan, item sebanyak jumlah tersebut akan dihasilkan. </li>  <li>Jika kondisi ditetapkan, semua item yang awalnya sesuai dengan kondisi akan dihasilkan, dimulai dari bagian akhir daftar. Jika ternyata salah satu item tidak sesuai dengan kondisi, item lainnya tidak akan diperhitungkan. </li>  <li>Jika parameter ini null, item terakhir dalam daftar akan dihasilkan.</li> </ul>


## Examples

### Example #1 
Mencari nilai terakhir dalam daftar \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Mencari nilai terakhir dalam daftar \{3, 4, 5, -1, 7, 8, 2} yang lebih besar dari 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
