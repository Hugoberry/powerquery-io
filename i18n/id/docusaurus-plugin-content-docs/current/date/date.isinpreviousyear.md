---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


Menentukan apakah tanggal ini muncul dalam tahun sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam tahun saat ini.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Remarks

Menentukan apakah nilai tanggalwaktu yang diberikan `dateTime` muncul pada tahun sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam tahun saat ini.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang akan dievaluasi.


## Examples

### Example #1
Menentukan apakah tahun sebelum waktu sistem saat ini terdapat dalam tahun sebelumnya.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
