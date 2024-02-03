---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

Memberikan hasil pembulatan bilangan positif ke bawah dan bilangan negatif ke atas. Jumlah digit dapat ditentukan.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

Memberikan hasil pembulatan <code>number</code> berdasarkan tanda bilangan. Fungsi ini akan membulatkan bilangan positif ke bawah dan bilangan negatif ke atas.   Jika <code>digits</code> ditentukan, <code>number</code> dibulatkan ke jumlah digit desimal <code>digits</code>.  


## Examples

### Example #1 
Membulatkan angka -1,2 ke arah nol.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Membulatkan angka 1,2 ke arah nol.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Membulatkan bilangan -1,234 ke dua desimal di belakang nol.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
