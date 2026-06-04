---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Menunjukkan apakah tanggal ini muncul selama tahun ini dan terdapat pada atau sebelum hari ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan apakah nilai datetime tertentu `dateTime` muncul selama tahun ini dan terdapat pada atau sebelum hari ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang akan dievaluasi.


## Examples

### Example #1
Menentukan apakah waktu sistem saat ini terdapat dalam tahun berjalan.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
