---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Menunjukkan apakah tanggal ini jatuh pada tahun kabisat.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan apakah nilai tanggalwaktu tertentu `dateTime` jatuh pada tahun kabisat.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang akan dievaluasi.


## Examples

### Example #1
Menentukan apakah tahun 2012, seperti ditunjukkan oleh `#date(2012, 01, 01)`, adalah tahun kabisat.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
