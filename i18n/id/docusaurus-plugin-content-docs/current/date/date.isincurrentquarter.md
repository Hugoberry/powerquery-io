---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Menunjukkan apakah tanggal ini muncul selama kuartal ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan apakah nilai datetime tertentu `dateTime` muncul selama kuartal ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang akan dievaluasi.


## Examples

### Example #1
Menentukan apakah waktu sistem saat ini terdapat dalam kuartal ini.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
