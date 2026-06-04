---
title: Comparer.Equals
---

# Comparer.Equals


Kembalikan nilai logik berdasarkan semakan kesamaan untuk dua nilai yang diberi.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Mengembalikan nilai `logical` berdasarkan semakan persamaan ke atas dua nilai, `x` dan `y`yang diberikan , menggunakan `comparer`.

`comparer` ialah kod `Comparer` yang digunakan untuk mengawal perbandingan. Pembanding A ialah fungsi yang menerima dua argumen dan mengembalikan -1, 0 atau 1 berdasarkan sama ada nilai pertama adalah kurang daripada, sama dengan, atau lebih besar daripada yang kedua. Pembanding boleh digunakan untuk menyediakan perbandingan kes tidak sensitif atau budaya dan sedar-tempatan.

Pembanding terbina dalam berikut tersedia dalam bahasa formula:

-   `Comparer.Ordinal`: Digunakan untuk melaksanakan perbandingan ordinal yang tepat
-   `Comparer.OrdinalIgnoreCase`: Digunakan untuk melaksanakan huruf besar tidak sensitif huruf yang tepat perbandingan
-   `Comparer.FromCulture`: Digunakan untuk melaksanakan perbandingan sedar-budaya


## Examples

### Example #1
Bandingkan "1" dan "A" dengan menggunakan tempatan "en-US" untuk menentukan jika nilai-nilai ini adalah sama.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
