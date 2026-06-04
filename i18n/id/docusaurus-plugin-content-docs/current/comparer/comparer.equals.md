---
title: Comparer.Equals
---

# Comparer.Equals


Menghasilkan nilai logika berdasarkan pemeriksaan persamaan atas dua nilai yang diberikan.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Menghasilkan nilai `logis` berdasarkan pemeriksaan kesetaraan atas dua nilai yang diberikan, `x` dan `y`, menggunakan `comparer`. yang disediakan

`comparer`adalah `Pembanding` yang digunakan untuk mengontrol perbandingan. Pembanding adalah fungsi yang menerima dua argumen dan mengembalikan -1, 0, atau 1 berdasarkan apakah nilai pertama lebih kecil, sama dengan, atau lebih besar dari yang kedua. Pembanding dapat digunakan untuk memberikan perbandingan peka huruf besar kecil atau budaya dan paham bahasa lokal.

Pembanding bawaan berikut tersedia dalam bahasa rumus:

-   `Comparer.Ordinal`: Digunakan untuk melakukan perbandingan ordinal yang tepat
-   `Comparer.OrdinalIgnoreCase`: Digunakan untuk melakukan perbandingan peka huruf besar-kecil ordinal yang tepat
-   `Comparer.FromCulture`: Digunakan untuk melakukan perbandingan berdasarkan budaya


## Examples

### Example #1
Bandingkan "1" dan "A" menggunakan lokal "en-US" untuk menentukan apakah nilai setara atau tidak.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
