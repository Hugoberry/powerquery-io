---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Mengembalikan permulaan bulan.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Mengembalikan permulaan bulan yang mengandungi `dateTime`. `dateTime` mesti nilai `date` atau `datetime`.


## Examples

### Example #1
Cari permulaan bulan bagi 10 Oktober 2011, 8:10:32PG.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
