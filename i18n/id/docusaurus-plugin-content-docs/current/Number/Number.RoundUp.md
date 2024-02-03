---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Menghasilkan bilangan bulat tertinggi berikutnya. Jumlah digit dapat ditentukan.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Mengembalikan hasil pembulatan <code>number</code> ke atas ke bilangan bulat tertinggi berikutnya. Jika <code>number</code> null, fungsi ini mengembalikan null.    Jika <code>digits</code> disediakan, <code>number</code> dibulatkan ke jumlah digit desimal yang ditentukan.  


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
