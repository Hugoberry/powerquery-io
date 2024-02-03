---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Menghasilkan daftar yang menghapus jumlah elemen yang ditetapkan dari akhir daftar.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Menghasilkan daftar yang menghapus <code>countOrCondition</code> elemen terakhir dari akhir daftar <code>list</code>. Jika <code>list</code> kurang dari <code>countOrCondition</code> elemen, maka daftar kosong akan dihasilkan. <ul> <li>Jika jumlah ditetapkan, item sebanyak jumlah tersebut akan dihapus. </li> <li>Jika kondisi ditetapkan, daftar yang dihasilkan akan diakhiri dengan elemen dari bawah di <code>list</code> yang memenuhi kriteria. Jika ternyata salah satu item tidak sesuai dengan kondisi, item lainnya tidak akan diperhitungkan. </li> <li>Jika parameter ini null, maka hanya satu item yang akan dihapus. </li> </ul>


## Examples

### Example #1 
Membuat daftar dari \{1, 2, 3, 4, 5} tanpa 3 bilangan terakhir.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Membuat daftar dari \{5, 4, 2, 6, 4} yang diakhiri dengan bilangan kurang dari 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
