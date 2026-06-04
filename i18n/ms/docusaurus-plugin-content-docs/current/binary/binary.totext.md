---
title: Binary.ToText
---

# Binary.ToText


Mengekodkan data perduaan kepada bentuk teks.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Mengembalikan hasil daripada menukar senarai perduaan nombor `binary` kepada nilai teks. Secara pilihan, `encoding` mungkin ditentukan untuk menunjukkan pengekodan yang perlu digunakan dalam nilai teks yang dihasilkan. Nilai `BinaryEncoding` berikut boleh digunakan untuk `encoding`.

-   `BinaryEncoding.Base64`: Pengekodan Asas 64
-   `BinaryEncoding.Hex`: Pengekodan Heks



## Category
Binary
