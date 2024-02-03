---
title: Binary.FromText
---

# Binary.FromText


## Description

Mengkodekan data dari format teks ke biner.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Mengembalikan hasil konversi nilai teks <code>text</code> ke biner (daftar <code>bilangan</code>). <code>encoding</code> dapat ditetapkan untuk menunjukkan pengodean yang digunakan dalam nilai teks.      Nilai <code>BinaryEncoding</code> berikut dapat digunakan untuk <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Pengodean Base 64</li>        <li><code>BinaryEncoding.Hex</code>: Pengodean heksadesimal</li>      </ul>


## Examples

### Example #1 
Mengkodekan &#34;1011&#34; ke biner.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Mengkodekan &#34;1011&#34; ke biner dengan pengodean Heksadesimal.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
