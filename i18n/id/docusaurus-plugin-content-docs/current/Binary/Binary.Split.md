---
title: Binary.Split
---

# Binary.Split


## Description

Membagi biner yang ditentukan ke dalam daftar biner menggunakan ukuran halaman yang ditentukan.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Membagi <code>binary</code> ke dalam daftar biner dengan elemen pertama daftar output adalah biner yang berisi <code>pageSize</code> byte pertama dari     biner sumber, elemen daftar output berikutnya adalah biner yang berisi <code>pageSize</code> byte berikutnya dari biner sumber, dan seterusnya.



## Category
Binary
