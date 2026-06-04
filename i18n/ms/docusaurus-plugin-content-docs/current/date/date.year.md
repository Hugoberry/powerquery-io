---
title: Date.Year
---

# Date.Year


Mengembalikan komponen tahun.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Mengembalikan komponen tahun bagi nilai `datetime` yang ditentukan, `dateTime`.


## Examples

### Example #1
Cari tahun dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
