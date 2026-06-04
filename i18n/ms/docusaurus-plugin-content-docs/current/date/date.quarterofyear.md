---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Mengembalikan nombor yang menunjukkan tarikh tersebut jatuh pada suku tahun yang mana.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Mengembalikan nombor daripada 1 hingga 4 yang menunjukkan tarikh `dateTime` jatuh pada suku tahun yang mana. `dateTime` boleh menjadi nilai `date`, `datetime` atau `datetimezone`.


## Examples

### Example #1
Cari suku tahun yang mana tarikh #date(2011, 12, 31) jatuh.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
