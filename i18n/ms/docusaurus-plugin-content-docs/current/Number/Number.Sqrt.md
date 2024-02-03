---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Mengembalikan punca kuasa dua bagi nombor.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Mengembalikan punca kuasa dua bagi <code>number</code>.    Jika <code>number</code> adalah nol, <code>Number.Sqrt</code> mengembalikan nol. Jika ia adalah nilai negatif, <code>Number.NaN</code> dikembalikan (Bukan nombor).


## Examples

### Example #1 
Cari punca kuasa dua bagi 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Cari punca kuasa dua bagi 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
