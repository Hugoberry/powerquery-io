---
title: Binary.ToText
---

# Binary.ToText


Mengkodekan data biner ke format teks.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Mengembalikan hasil konversi daftar biner angka `binary` ke nilai teks. Secara opsional, `encoding` dapat ditetapkan untuk menunjukkan pengodean yang akan digunakan dalam nilai teks yang dihasilkan Nilai `BinaryEncoding` berikut dapat digunakan untuk `encoding`.

-   `BinaryEncoding.Base64`: Pengodean Base 64
-   `BinaryEncoding.Hex`: Pengodean heksadesimal



## Category
Binary
