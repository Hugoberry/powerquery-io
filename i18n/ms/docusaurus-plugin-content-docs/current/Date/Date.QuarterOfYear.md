---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Mengembalikan nombor yang menunjukkan tarikh tersebut jatuh pada suku tahun yang mana.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Mengembalikan nombor daripada 1 hingga 4 yang menunjukkan tarikh <code>dateTime</code> jatuh pada suku tahun yang mana. <code>dateTime</code> boleh menjadi nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code>.


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
