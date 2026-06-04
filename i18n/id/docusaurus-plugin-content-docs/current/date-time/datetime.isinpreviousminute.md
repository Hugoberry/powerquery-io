---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


Menentukan apakah tanggal waktu ini terjadi dalam satu menit sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam menit ini.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

Menentukan apakah nilai tanggalwaktu yang diberikan `dateTime` terjadi dalam satu menit sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam menit ini.

-   `dateTime`: Nilai `datetime`, atau `datetimezone` yang akan dievaluasi.


## Examples

### Example #1
Tentukan apakah menit sebelum waktu sistem saat ini dalam menit sebelumnya.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
