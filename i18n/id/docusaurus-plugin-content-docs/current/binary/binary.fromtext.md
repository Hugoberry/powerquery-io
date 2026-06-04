---
title: Binary.FromText
---

# Binary.FromText


Mengkodekan data dari format teks ke biner.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Mengembalikan hasil konversi nilai teks `text` ke biner (daftar `bilangan`). `encoding` dapat ditetapkan untuk menunjukkan pengodean yang digunakan dalam nilai teks. Nilai `BinaryEncoding` berikut dapat digunakan untuk `encoding`.

-   `BinaryEncoding.Base64`: Pengodean Base 64
-   `BinaryEncoding.Hex`: Pengodean heksadesimal


## Examples

### Example #1
Mengkodekan "1011" ke biner.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Mengkodekan "1011" ke biner dengan pengodean Heksadesimal.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
