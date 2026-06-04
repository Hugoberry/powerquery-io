---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Menghasilkan daftar yang melewatkan jumlah elemen yang ditetapkan di awal daftar.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Mengembalikan daftar yang menghapus elemen pertama daftar `list`. Jika `list` merupakan daftar kosong, daftar kosong akan dikembalikan. Fungsi ini mengambil parameter opsional, `countOrCondition`, untuk mendukung penghapusan beberapa nilai seperti yang tercantum di bawah ini.

-   Jika angka ditentukan, item akan dihapus hingga jumlah tersebut.
-   Jika kondisi ditentukan, item yang cocok berturut-turut di awal `list` akan dihapus.
-   Jika parameter ini null, perilaku default akan dilakukan.


## Examples

### Example #1
Membuat daftar dari \{1, 2, 3, 4, 5\} tanpa 3 bilangan pertama.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Membuat daftar dari \{5, 4, 2, 6, 1\} yang dimulai dengan bilangan kurang dari 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
