---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


Mengindikasikan apakah tanggalwaktu ini terjadi pada satu detik ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perhatikan bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam detik saat ini.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

Mengindikasikan apakah nilai tanggalwaktu yang diberikan `dateTime` terjadi pada satu detik ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam detik saat ini.

-   `dateTime`: Nilai `datetime`, atau `datetimezone` yang akan dievaluasi.


## Examples

### Example #1
Tentukan apakah detik setelah waktu sistem saat ini dalam detik berikutnya.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
