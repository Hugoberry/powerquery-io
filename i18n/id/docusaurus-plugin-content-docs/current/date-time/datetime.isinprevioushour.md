---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Mengindikasikan apakah tanggalwaktu ini terjadi selama satu jam sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perhatikan bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam jam saat ini.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Mengindikasikan apakah nilai tanggalwaktu yang diberikan `dateTime` terjadi selama satu jam sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam jam saat ini.

-   `dateTime`: Nilai `datetime`, atau `datetimezone` yang akan dievaluasi.


## Examples

### Example #1
Tentukan apakah jam sebelum waktu sistem saat ini dalam jam sebelumnya.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
