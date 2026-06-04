---
title: Date.DayOfYear
---

# Date.DayOfYear


Menghasilkan angka mulai dari 1 hingga 366 yang menunjukkan tahun.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Menghasilkan angka yang menunjukkan hari dalam setahun pada nilai `date`, `datetime`, atau `datetimezone`, `dateTime`.


## Examples

### Example #1
Hari dalam setahun untuk 1 Maret 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
