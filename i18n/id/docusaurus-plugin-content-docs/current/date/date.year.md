---
title: Date.Year
---

# Date.Year


Menghasilkan komponen tahun.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Menghasilkan komponen tahun dengan nilai `datetime` yang tersedia, `dateTime`.


## Examples

### Example #1
Mencari tahun dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
