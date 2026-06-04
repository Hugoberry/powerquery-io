---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


Menentukan apakah tanggalwaktu ini terjadi dalam beberapa menit sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam menit ini.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Menentukan apakah nilai tanggalwaktu yang diberikan `dateTime` terjadi dalam beberapa menit sebelumnya, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diisi nilai yang muncul dalam menit ini.

-   `dateTime`: Nilai `datetime`, atau `datetimezone` yang akan dievaluasi.
-   `minutes`: Jumlah menit.


## Examples

### Example #1
Tentukan apakah menit sebelum waktu sistem saat ini dalam dua menit sebelumnya.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
