---
title: List.RemoveFirstN
---

# List.RemoveFirstN


## Description

Menghasilkan daftar yang melewatkan jumlah elemen yang ditetapkan di awal daftar.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Mengembalikan daftar yang menghapus elemen pertama daftar <code>list</code>. Jika <code>list</code> adalah daftar kosong, daftar kosong akan dihasilkan.Fungsi ini memerlukan parameter opsional, <code>countOrCondition</code>, untuk mendukung proses penghapusan beberapa nilai yang tercantum di bawah ini. <ul> <li>Jika jumlah ditetapkan, item sebanyak jumlah tersebut akan dihapus. </li> <li>Jika kondisi ditetapkan, daftar yang dihasilkan akan dimulai dengan elemen pertama dalam <code>list</code> yang memenuhi kriteria. Jika ternyata salah satu item tidak sesuai dengan kondisi, item lainnya tidak akan diperhitungkan. </li> <li>Jika parameter ini null, perilaku default akan dijalankan. </li> </ul>


## Examples

### Example #1 
Membuat daftar dari \{1, 2, 3, 4, 5} tanpa 3 bilangan pertama.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Membuat daftar dari \{5, 4, 2, 6, 1} yang dimulai dengan bilangan kurang dari 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
