---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Menunjukkan apakah tanggal ini muncul selama pekan ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan apakah nilai datetime tertentu `dateTime` muncul selama pekan ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang akan dievaluasi.


## Examples

### Example #1
Menentukan apakah waktu sistem saat ini terdapat dalam pekan ini.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
