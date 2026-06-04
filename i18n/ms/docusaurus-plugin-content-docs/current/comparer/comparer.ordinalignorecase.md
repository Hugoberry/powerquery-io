---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Kembalikan fungsi pembanding tidak sensitif huruf besar atau kecil yang menggunakan peraturan Ordinal untuk membanding nilai.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Mengembalikan fungsi pembanding tidak sensitif huruf besar atau kecil yang menggunakan peraturan Ordinal untuk membandingkan nilai yang diberikan `x` dan `y`.  
  
Fungsi pembanding menerima dua argumen dan mengembalikan -1, 0 atau 1 berdasarkan sama ada nilai pertama adalah kurang daripada, sama dengan atau lebih besar daripada yang kedua.


## Examples

### Example #1
Menggunakan peraturan Ordinal tidak sensitif huruf besar atau kecil, bandingkan "Abc" dengan "abc". Perhatikan "Abc" adalah kurang daripada "abc" dengan menggunakan `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
