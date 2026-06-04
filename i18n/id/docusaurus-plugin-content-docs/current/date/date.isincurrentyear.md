---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Menunjukkan apakah tanggal ini muncul selama tahun ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan apakah nilai datetime tertentu `dateTime` muncul selama tahun ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang akan dievaluasi.


## Examples

### Example #1
Menentukan apakah waktu sistem saat ini terdapat dalam tahun ini.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
