---
title: Binary.Split
---

# Binary.Split


Membagi biner yang ditentukan ke dalam daftar biner menggunakan ukuran halaman yang ditentukan.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Membagi `binary` ke dalam daftar biner dengan elemen pertama daftar output adalah biner yang berisi `pageSize` byte pertama dari biner sumber, elemen daftar output berikutnya adalah biner yang berisi `pageSize` byte berikutnya dari biner sumber, dan seterusnya.



## Category
Binary
