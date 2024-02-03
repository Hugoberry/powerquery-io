---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

Mengembalikan hasil pembundaran nombor positif ke bawah dan nombor negatif ke atas. Bilangan digit boleh ditentukan.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

Mengembalikan hasil pembundaran <code>number</code> berdasarkan tanda nombor. Fungsi ini akan membundarkan nombor positif ke bawah dan nombor negatif ke atas.    Jika <code>digits</code> ditentukan, <code>number</code> dibundarkan kepada <code>digits</code> bilangan digit perpuluhan.  


## Examples

### Example #1 
Bundarkan nombor -1.2 ke arah sifar.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Bundarkan nombor 1.2 ke arah sifar.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Bundarkan nombor -1.234 kepada dua titik perpuluhan ke arah sifar.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
