---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Menghasilkan fungsi pembanding yang tidak peka huruf besar kecil yang menggunakan aturan Ordinal untuk membandingan nilai.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Mengembalikan fungsi pembanding tidak peka huruf besar/kecil yang menggunakan aturan Ordinal untuk membandingkan nilai yang diberikan `x` dan `y`.  
  
Fungsi pembanding menerima dua argumen dan mengembalikan -1, 0, atau 1 berdasarkan apakah nilai pertama kurang dari, sama dengan, atau lebih besar dari yang kedua.


## Examples

### Example #1
Dengan aturan Ordinal yang tidak peka huruf besar kecil, membandingkan "Abc" dengan "abc". Perhatikan bahwa "Abc" kurang dari "abc" menggunakan `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
