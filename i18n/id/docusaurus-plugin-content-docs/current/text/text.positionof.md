---
title: Text.PositionOf
---

# Text.PositionOf


Menghasilkan posisi pertama pada nilai (-1 jika tidak ditemukan).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Mengembalikan posisi kemunculan tertentu dari nilai teks `substring` yang ditemukan dalam `text`. Parameter opsional `occurrence` dapat digunakan untuk menentukan posisi kemunculan yang harus dihasilkan (kemunculan pertama secara default). Mengembalikan -1 jika `substring` tidak ditemukan.

`comparer` adalah `Pembanding` yang digunakan untuk mengontrol perbandingan. Pembanding dapat digunakan untuk memberikan perbandingan yang tidak peka huruf besar kecil atau sadar kultur dan lokal.

Pembanding bawaan berikut tersedia dalam bahasa rumus:

-   `Comparer.Ordinal`: Digunakan untuk melakukan perbandingan ordinal akurat
-   `Comparer.OrdinalIgnoreCase`: Digunakan untuk melakukan perbandingan ordinal akurat yang tidak peka huruf besar kecil
-   `Comparer.FromCulture`: Digunakan untuk melakukan perbandingan sadar kultur


## Examples

### Example #1
Mendapatkan posisi kemunculan pertama "World" pada teks "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Mendapatkan posisi kemunculan terakhir "World" pada teks "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
