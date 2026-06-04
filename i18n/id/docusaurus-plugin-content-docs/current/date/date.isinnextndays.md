---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Menentukan apakah tanggal ini muncul dalam beberapa hari berikutnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam hari ini.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Menentukan apakah nilai tanggalwaktu yang diberikan `dateTime` terjadi pada beberapa hari berikutnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam hari saat ini.

-   `dateTime`: Nilai `date`, atau `datetime`, atau `datetimezone` yang akan dievaluasi.
-   `days`: Jumlah hari.


## Examples

### Example #1
Menentukan apakah tanggal setelah waktu sistem saat ini terjadi dua hari lagi.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
