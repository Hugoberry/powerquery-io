---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


Menentukan apakah tanggal ini muncul dalam minggu sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam minggu saat ini.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Remarks

Menentukan apakah nilai tanggalwaktu yang diberikan `dateTime` muncul pada minggu sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam minggu ini.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang akan dievaluasi.


## Examples

### Example #1
Menentukan apakah pekan sebelum waktu sistem saat ini terdapat dalam pekan sebelumnya.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
