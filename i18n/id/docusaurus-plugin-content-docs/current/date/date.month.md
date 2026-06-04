---
title: Date.Month
---

# Date.Month


Menghasilkan komponen bulan.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Menghasilkan komponen bulan dengan nilai `datetime` yang tersedia, `dateTime`.


## Examples

### Example #1
Mencari bulan dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
