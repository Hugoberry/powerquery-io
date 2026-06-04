---
title: Lines.ToBinary
---

# Lines.ToBinary


Mengkonversi daftar teks ke nilai biner menggunakan pengodean dan lineSeparator yang ditetapkan. lineSeparator yang ditetapkan tersebut ditambahkan ke setiap baris. Jika tidak ditetapkan, maka karakter pembatas baris baru dan baris baru akan digunakan.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Mengkonversi daftar teks ke nilai biner menggunakan pengodean dan lineSeparator yang ditetapkan. lineSeparator yang ditetapkan tersebut ditambahkan ke setiap baris. Jika tidak ditetapkan, maka karakter pembatas baris baru dan baris baru akan digunakan.



## Category
Lines
