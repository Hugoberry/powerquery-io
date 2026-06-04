---
title: Text.PositionOf
---

# Text.PositionOf


Mengembalikan kedudukan pertama bagi nilai (-1 jika tidak ditemui).


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

Mengembalikan kedudukan kejadian yang ditentukan bagi nilai teks `substring` yang ditemui dalam `text`. Parameter pilihan `occurrence` boleh digunakan untuk menentukan kedudukan kejadian yang perlu dikembalikan (secara lalai kejadian pertama). Mengembalikan -1 jika `substring` tidak ditemui.

`comparer` merupakan `Comparer` yang digunakan untuk mengawal perbandingan. Pembanding boleh digunakan untuk memberikan perbandingan tidak sensitif huruf atau perbandingan sedar budaya dan tempatan.

Pembanding terbina dalam berikut tersedia dalam bahasa formula:

-   `Comparer.Ordinal`: Digunakan untuk melaksanakan perbandingan ordinal yang tepat
-   `Comparer.OrdinalIgnoreCase`: Digunakan untuk melaksanakan perbandingan tidak sensitif huruf ordinal yang tepat
-   `Comparer.FromCulture`: Digunakan untuk melaksanakan perbandingan sedar budaya


## Examples

### Example #1
Dapatkan kedudukan pertama kejadian pertama bagi "World" dalam teks "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Dapatkan kedudukan kejadian terakhir bagi "World" dalam "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
