---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Mengembalikan hasil pembundaran nombor positif ke atas dan nombor negatif ke bawah. Bilangan digit boleh dinyatakan.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Mengembalikan hasil pembundaran <code>number</code> berdasarkan tanda nombor. Fungsi ini akan membundarkan nombor positif ke atas dan nombor negatif ke bawah.    Jika <code>digits</code> ditentukan, <code>number</code> dibundarkan kepada <code>digits</code> bilangan digit perpuluhan.  


## Examples

### Example #1 
Bundarkan nombor -1.2 menjauhi sifar.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Bundarkan nombor 1.2 menjauhi sifar.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Bundarkan nombor -1.234 kepada dua titik perpuluhan jauh daripada sifar.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
