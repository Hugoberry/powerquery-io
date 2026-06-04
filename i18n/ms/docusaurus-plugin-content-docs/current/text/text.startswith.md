---
title: Text.StartsWith
---

# Text.StartsWith


Menunjukkan sama ada teks bermula dengan nilai yang ditentukan.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Mengembalikan benar jika nilai teks `text` bermula dengan nilai teks `substring`.

-   `text`: Nilai `teks` yang akan dicari.
-   `substring`: Nilai `teks` yang merupakan subrentetan untuk dicari dalam `text`.
-   `comparer`: *(Pilihan)* `Pembanding` digunakan untuk mengawal perbandingan. Sebagai contoh, `Comparer.OrdinalIgnoreCase` mungkin digunakan untuk melaksanakan carian tidak sensitif huruf.

`comparer` ialah `Pembanding` yang digunakan untuk mengawal perbandingan. Pembanding boleh digunakan untuk memberikan perbandingan tidak sensitif huruf atau kesedaran budaya dan tempatan.

Pembanding terbina dalam berikut tersedia dalam bahasa formula:

-   `Comparer.Ordinal`: Digunakan untuk melaksanakan perbandingan ordinal sebenar.
-   `Comparer.OrdinalIgnoreCase`: Digunakan untuk melaksanakan perbandingan tidak sensitif huruf ordinal sebenar.
-   `Comparer.FromCulture`: Digunakan untuk melaksanakan perbandingan kesedaran budaya.


## Examples

### Example #1
Semak sama ada teks "Hello, World" bermula dengan teks "hello".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Semak sama ada teks "Hello, World" bermula dengan teks "Hello".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Mengabaikan huruf besar atau kecil, semak sama ada teks "Hello, World" bermula dengan teks "hello".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
