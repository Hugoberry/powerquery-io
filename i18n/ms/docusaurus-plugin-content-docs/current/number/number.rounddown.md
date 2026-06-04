---
title: Number.RoundDown
---

# Number.RoundDown


Mengembalikan nombor tertinggi sebelumnya. Bilangan digit boleh ditentukan.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Mengembalikan hasil pembundaran `number` ke bawah kepada integer tertinggi sebelumnya. Jika `number` adalah nol, fungsi ini mengembalikan nol. Jika `digits` diberikan, `number` dibundarkan kepada bilangan digit perpuluhan tertentu.


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
