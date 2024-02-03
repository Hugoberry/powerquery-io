---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Memberikan hasil pembulatan bilangan positif ke atas dan bilangan negatif ke bawah. Jumlah digit dapat ditentukan.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Memberikan hasil pembulatan <code>number</code> berdasarkan tanda bilangan. Fungsi ini akan membulatkan bilangan positif ke atas dan bilangan negatif ke bawah.   Jika <code>digits</code> dientukan, <code>number</code> dibulatkan ke jumlah digit desimal <code>digits</code>.  


## Examples

### Example #1 
Membulatkan bilangan -1,2 menjauhi nol.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Membulatkan bilangan 1,2 menjauhi nol.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Membulatkan bilangan -1,234 menjadi dua desimal dari nol.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
