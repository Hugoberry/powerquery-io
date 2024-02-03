---
title: Binary.ToText
---

# Binary.ToText


## Description

Mengekodkan data perduaan kepada bentuk teks.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Mengembalikan hasil daripada menukar senarai perduaan nombor <code>binary</code> kepada nilai teks. Secara pilihan, <code>encoding</code> mungkin ditentukan untuk menunjukkan pengekodan yang perlu digunakan dalam nilai teks yang dihasilkan.      Nilai <code>BinaryEncoding</code> berikut boleh digunakan untuk <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Pengekodan Asas 64</li>        <li><code>BinaryEncoding.Hex</code>: Pengekodan Heks</li>      </ul>



## Category
Binary
