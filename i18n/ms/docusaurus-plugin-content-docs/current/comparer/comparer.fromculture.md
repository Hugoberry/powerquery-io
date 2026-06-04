---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Mengembalikan fungsi pembanding berdasarkan budaya yang ditentukan dan sensitiviti huruf.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Mengembalikan fungsi pembanding yang menggunakan `culture` dan sensitiviti huruf yang ditentukan oleh `ignoreCase` untuk melaksanakan fungsi perbandingan.  
  
Fungsi pembanding menerima dua argumen dan mengembalikan -1, 0, atau 1 berdasarkan sama ada nilai pertama adalah kurang daripada, sama dengan atau lebih besar daripada yang kedua.  
  
Nilai lalai untuk `ignoreCase` adalah palsu. Nama `culture` mestilah salah satu tempat yang disokong oleh kerangka .NET (contohnya, "en-US").


## Examples

### Example #1
Bandingkan "a" dan "A" dengan menggunakan tempatan "en-US" untuk menentukan jika nilai-nilai ini adalah sama.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Bandingkan "a" dan "A" dengan menggunakan tempat "en-US" mengabaikan huruf untuk menentukan jika nilai-nilai ini adalah sama.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
