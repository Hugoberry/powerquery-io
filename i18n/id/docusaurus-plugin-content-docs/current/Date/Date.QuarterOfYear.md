---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Menghasilkan angka yang menunjukkan kuartal jatuhnya tanggal dalam tahun.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Menghasilkan angka dari 1 hingga 4 yang menunjukkan kuartal jatuhnya tanggal <code>dateTime</code> dalam tahun. <code>dateTime</code> dapat berupa nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code>.


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
