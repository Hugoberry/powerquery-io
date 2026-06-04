---
title: Text.StartsWith
---

# Text.StartsWith


Menunjukkan apakah teks diawali nilai yang ditetapkan.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Mengembalikan true jika nilai teks `text` dimulai dengan nilai teks `substring`.

-   `text`: Nilai `text` yang akan dicari.
-   `substring`: Nilai `text` yang merupakan substring yang akan dicari di `text`.
-   `comparer`: *(Opsional)* `Comparer` yang digunakan untuk mengontrol perbandingan. Misalnya, `Comparer.OrdinalIgnoreCase` digunakan untuk melakukan pencarian yang tidak peka huruf besar/kecil.

`comparer` adalah `Comparer` yang digunakan untuk mengontrol perbandingan. Pembanding (Comparer) dapat digunakan untuk menghasilkan perbandingan yang tidak peka huruf besar/kecil atau sesuai pelokalan.

Pembanding bawaan berikut tersedia dalam bahasa rumus:

-   `Comparer.Ordinal`: Digunakan untuk melakukan perbandingan ordinal eksak.
-   `Comparer.OrdinalIgnoreCase`: Digunakan untuk melakukan perbandingan ordinal eksak yang tidak peka huruf besar/kecil.
-   `Comparer.FromCulture`: Digunakan untuk melakukan perbandingan yang sesuai pelokalan.


## Examples

### Example #1
Memastikan teks "Hello, World" diawali dengan teks "hello".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Memastikan teks "Hello, World" diawali dengan teks "Hello".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Mengabaikan huruf besar/kecil, memeriksa apakah teks "Hello, World" diawali dengan teks "hello".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
