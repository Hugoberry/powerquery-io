---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Menghasilkan fungsi pembanding berdasarkan kultur dan sensitivitas kasus yang ditentukan.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Menghasilkan fungsi pembanding yang menggunakan `culture` dan sensitivitas kasus yang ditentukan oleh `ignoreCase` untuk melakukan perbandingan.  
  
Fungsi pembanding menerima dua argumen dan menghasilkan -1, 0, atau 1 berdasarkan apakah nilai pertama kurang dari, sama dengan, atau lebih besar dari yang kedua.  
  
Nilai default untuk `ignoreCase` adalah false. `culture` harus merupakan salah satu bahasa lokal yang didukung oleh .NET framework (misalnya, "en-US").


## Examples

### Example #1
Bandingkan "a" dan "A" menggunakan lokal "en-US" untuk menentukan apakah nilai setara atau tidak.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Bandingkan "a" dan "A" menggunakan lokal "en-US" dengan mengabaikan kasus untuk menentukan apakah nilai setara atau tidak.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
