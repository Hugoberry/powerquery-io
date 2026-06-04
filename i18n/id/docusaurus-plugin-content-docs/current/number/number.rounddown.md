---
title: Number.RoundDown
---

# Number.RoundDown


Memberikan bilangan tertinggi sebelumnya. Jumlah digit dapat ditentukan.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Mengembalikan hasil pembulatan `number` ke bawah ke bilangan bulat tertinggi sebelumnya. Jika `number` null, fungsi ini mengembalikan null. Jika `digits` disediakan, `number` dibulatkan ke jumlah digit desimal yang ditentukan.


## Examples

### Example #1
Membulatkan 1,234 ke bawah ke bilangan bulat.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Membulatkan 1,999 ke bawah ke bilangan bulat.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3
Membulatkan 1,999 ke bawah menjadi dua desimal.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
