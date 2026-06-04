---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Menentukan apakah tanggal ini muncul dalam beberapa kuartal berikutnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam kuartal saat ini.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Menentukan apakah nilai tanggalwaktu yang diberikan `dateTime` muncul pada beberapa kuartal berikutnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam kuartal saat ini.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang akan dievaluasi.
-   `quarters`: Jumlah kuartal.


## Examples

### Example #1
Menentukan apakah triwulan setelah waktu sistem saat ini terjadi dua triwulan lagi.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
