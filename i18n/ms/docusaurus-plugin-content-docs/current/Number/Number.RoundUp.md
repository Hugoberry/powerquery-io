---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Mengembalikan integer tertinggi seterusnya. Bilangan digit boleh ditentukan.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Mengembalikan hasil pembundaran <code>number</code> sehingga kepada integer tertinggi seterusnya. Jika <code>number</code> adalah nol, fungsi ini mengembalikan nol.    Jika <code>digits</code> diberikan, <code>number</code> dibundarkan kepada bilangan digit perpuluhan tertentu.  


## Examples

### Example #1 
Bundarkan ke atas 1.234 kepada integer.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Bundarkan ke atas 1.999 kepada integer.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Bulatkan ke atas 1.234 kepada dua titik perpuluhan.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
