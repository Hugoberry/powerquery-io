---
title: Date.Month
---

# Date.Month


Mengembalikan komponen bulan.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Mengembalikan komponen bulan bagi nilai `datetime` yang ditentukan, `dateTime`.


## Examples

### Example #1
Cari bulan dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
