---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Menghasilkan fungsi pembanding yang menggunakan peraturan Ordinal untuk membandingkan nilai.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Menghasilkan fungsi pembanding yang menggunakan aturan Ordinal untuk membandingkan nilai yang diberikan `x` dan `y`.  
  
Fungsi pembanding menerima dua argumen dan mengembalikan -1, 0, atau 1 berdasarkan apakah nilai pertama kurang dari, sama dengan, atau lebih besar dari yang kedua.


## Examples

### Example #1
Dengan menggunakan aturan Ordinal, membandingkan apakah "encyclopædia" dan "encyclopaedia" sama. Perlu dicatat keduanya sama menggunakan `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
