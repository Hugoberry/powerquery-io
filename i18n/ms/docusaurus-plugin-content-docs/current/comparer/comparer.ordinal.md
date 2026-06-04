---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Kembalikan fungsi pembanding yang menggunakan peraturan Ordinal untuk membandingkan nilai.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Mengembalikan fungsi pembanding yang menggunakan peraturan Ordinal untuk membandingkan nilai yang diberikan `x` dan `y`.  
  
Fungsi pembanding menerima dua argumen dan mengembalikan -1, 0 atau 1 berdasarkan sama ada nilai pertama kurang daripada, sama dengan atau lebih besar daripada yang kedua.


## Examples

### Example #1
Menggunakan peraturan Ordinal, bandingkan jika "encyclopædia" dan "encyclopaedia" adalah sama. Perhatikan bahawa ini adalah sama dengan menggunakan `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
