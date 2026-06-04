---
title: List.Split
---

# List.Split


Membagi daftar yang ditentukan ke dalam satu daftar yang berisi beberapa daftar menggunakan ukuran halaman yang ditentukan.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Membagi `list` ke dalam daftar berisi daftar dengan elemen pertama daftar output adalah daftar yang berisi elemen `pageSize` pertama dari daftar sumber, elemen daftar output berikutnya adalah daftar yang berisi elemen `pageSize` berikutnya dari daftar sumber, dan seterusnya.



## Category
List.Transformation functions
