---
title: Number.RoundUp
---

# Number.RoundUp


Menghasilkan bilangan bulat tertinggi berikutnya. Jumlah digit dapat ditentukan.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Mengembalikan hasil pembulatan `number` ke atas ke bilangan bulat tertinggi berikutnya. Jika `number` null, fungsi ini mengembalikan null. Jika `digits` disediakan, `number` dibulatkan ke jumlah digit desimal yang ditentukan.


## Examples

### Example #1
Membulatkan 1,234 ke atas ke bilangan bulat.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2
Membulatkan 1,999 ke atas ke bilangan bulat.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3
Membulatkan 1,234 ke atas ke dua tempat desimal.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
