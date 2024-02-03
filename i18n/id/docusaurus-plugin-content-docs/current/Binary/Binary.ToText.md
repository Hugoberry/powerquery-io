---
title: Binary.ToText
---

# Binary.ToText


## Description

Mengkodekan data biner ke format teks.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Mengembalikan hasil konversi daftar biner angka <code>binary</code> ke nilai teks. Secara opsional, <code>encoding</code> dapat ditetapkan untuk menunjukkan pengodean yang akan digunakan dalam nilai teks yang dihasilkan      Nilai <code>BinaryEncoding</code> berikut dapat digunakan untuk <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Pengodean Base 64</li>        <li><code>BinaryEncoding.Hex</code>: Pengodean heksadesimal</li>      </ul>



## Category
Binary
