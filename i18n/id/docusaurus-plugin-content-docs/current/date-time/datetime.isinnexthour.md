---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Mengindikasikan apakah tanggalwaktu ini terjadi pada satu jam ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam jam saat ini.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Mengindikasikan apakah nilai tanggalwaktu yang diberikan `dateTime` terjadi pada satu jam ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam jam saat ini.

-   `dateTime`: Nilai `datetime`, atau `datetimezone` yang akan dievaluasi.


## Examples

### Example #1
Tentukan apakah jam setelah waktu sistem saat ini berada dalam jam berikutnya.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
