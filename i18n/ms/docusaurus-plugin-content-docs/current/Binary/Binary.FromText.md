---
title: Binary.FromText
---

# Binary.FromText


## Description

Menyahkodkan data daripada bentuk teks kepada perduaan.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Mengembalikan hasil daripada menukar nilai teks <code>text</code> kepada perduaan (senarai <code>number</code>). <code>encoding</code> mungkin ditentukan untuk menunjukkan pengekodan yang digunakan dalam nilai teks.      Nilai <code>BinaryEncoding</code> berikut boleh digunakan untuk <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Pengekodan Asas 64</li>        <li><code>BinaryEncoding.Hex</code>: Pengekodan Heks</li>      </ul>


## Examples

### Example #1 
Nyahkodkan &#34;1011&#34; menjadi perduaan.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Nyahkodkan &#34;1011&#34; menjadi perduaan dengan pengekodan Heks.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
