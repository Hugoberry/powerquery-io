---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Menghasilkan angka yang menunjukkan kuartal jatuhnya tanggal dalam tahun.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Menghasilkan angka dari 1 hingga 4 yang menunjukkan kuartal jatuhnya tanggal `dateTime` dalam tahun. `dateTime` dapat berupa nilai `date`, `datetime`, atau `datetimezone`.


## Examples

### Example #1
Mencari kuartal jatuhnya tanggal #date(2011, 12, 31) dalam tahun.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
