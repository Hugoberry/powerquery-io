---
title: Binary.FromText
---

# Binary.FromText


Menyahkodkan data daripada bentuk teks kepada perduaan.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Mengembalikan hasil daripada menukar nilai teks `text` kepada perduaan (senarai `number`). `encoding` mungkin ditentukan untuk menunjukkan pengekodan yang digunakan dalam nilai teks. Nilai `BinaryEncoding` berikut boleh digunakan untuk `encoding`.

-   `BinaryEncoding.Base64`: Pengekodan Asas 64
-   `BinaryEncoding.Hex`: Pengekodan Heks


## Examples

### Example #1
Nyahkodkan "1011" menjadi perduaan.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Nyahkodkan "1011" menjadi perduaan dengan pengekodan Heks.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
