---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Menentukan apakah tanggal ini muncul pada hari berikutnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam hari ini.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Menentukan apakah nilai tanggalwaktu yang diberikan `dateTime` terjadi pada hari berikutnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul pada hari ini.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang akan dievaluasi.


## Examples

### Example #1
Menentukan apakah hari setelah waktu sistem saat ini terdapat dalam hari berikutnya.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
