---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Menghasilkan angka mulai dari 1 hingga 366 yang menunjukkan tahun.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Menghasilkan angka yang menunjukkan hari dalam setahun pada nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code>, <code>dateTime</code>.


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
