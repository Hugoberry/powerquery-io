---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Mengembalikan nombor daripada 1 hingga 366 mewakili hari dalam tahun.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Mengembalikan nombor yang mewakili hari dalam tahun dalam nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> yang ditentukan, <code>dateTime</code>.


## Examples

### Example #1 
Hari dalam tahun bagi 1 Mac 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
