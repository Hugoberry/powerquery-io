---
title: List.RemoveLastN
---

# List.RemoveLastN


Menghasilkan daftar yang menghapus jumlah elemen yang ditetapkan dari akhir daftar.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Menghasilkan daftar yang menghapus `countOrCondition` elemen terakhir dari akhir daftar `list`. Jika `list` memiliki kurang dari `countOrCondition` elemen, daftar kosong akan dikembalikan.

-   Jika angka ditentukan, item akan dihapus hingga jumlah tersebut.
-   Jika kondisi ditentukan, item yang cocok berturut-turut di akhir `list` akan dihapus.
-   Jika parameter ini null, hanya satu item yang dihapus.


## Examples

### Example #1
Membuat daftar dari \{1, 2, 3, 4, 5\} tanpa 3 bilangan terakhir.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Membuat daftar dari \{5, 4, 2, 6, 4\} yang diakhiri dengan bilangan kurang dari 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
