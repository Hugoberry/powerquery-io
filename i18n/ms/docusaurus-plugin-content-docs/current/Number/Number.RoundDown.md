---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Mengembalikan nombor tertinggi sebelumnya. Bilangan digit boleh ditentukan.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Mengembalikan hasil pembundaran <code>number</code> ke bawah kepada integer tertinggi sebelumnya. Jika <code>number</code> adalah nol, fungsi ini mengembalikan nol.    Jika <code>digits</code> diberikan, <code>number</code> dibundarkan kepada bilangan digit perpuluhan tertentu.  


## Examples

### Example #1 
Bundarkan ke bawah 1.234 kepada integer.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Bundarkan ke bawah 1.999 kepada integer.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Bulatkan ke bawah 1.999 kepada dua titik perpuluhan.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
