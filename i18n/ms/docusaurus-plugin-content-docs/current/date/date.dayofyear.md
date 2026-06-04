---
title: Date.DayOfYear
---

# Date.DayOfYear


Mengembalikan nombor daripada 1 hingga 366 mewakili hari dalam tahun.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Mengembalikan nombor yang mewakili hari dalam tahun dalam nilai `date`, `datetime` atau `datetimezone` yang ditentukan, `dateTime`.


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
