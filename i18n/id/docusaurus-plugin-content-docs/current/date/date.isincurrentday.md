---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Menunjukkan apakah tanggal ini muncul selama hari ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan apakah nilai datetime tertentu `dateTime` muncul selama hari ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang akan dievaluasi.


## Examples

### Example #1
Menentukan apakah waktu sistem saat ini terdapat dalam hari ini.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
