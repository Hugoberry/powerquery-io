---
title: List.Split
---

# List.Split


## Description

Membagi daftar yang ditentukan ke dalam satu daftar yang berisi beberapa daftar menggunakan ukuran halaman yang ditentukan.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Membagi <code>list</code> ke dalam daftar berisi daftar dengan elemen pertama daftar output adalah daftar yang berisi elemen <code>pageSize</code> pertama dari    daftar sumber, elemen daftar output berikutnya adalah daftar yang berisi elemen <code>pageSize</code> berikutnya dari daftar sumber, dan seterusnya.



## Category
List.Transformation functions
