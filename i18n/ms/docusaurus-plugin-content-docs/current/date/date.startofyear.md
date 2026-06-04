---
title: Date.StartOfYear
---

# Date.StartOfYear


Mengembalikan permulaan tahun.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Mengembalikan permulaan tahun yang mengandungi `dateTime`. `dateTime` mesti nilai `date`, `datetime` atau `datetimezone`.


## Examples

### Example #1
Cari permulaan tahun bagi 10 Oktober 2011, 8:10:32PG.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
