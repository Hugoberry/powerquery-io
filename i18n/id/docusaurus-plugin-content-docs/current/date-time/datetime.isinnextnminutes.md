---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Mengindikasikan apakah tanggalwaktu ini terjadi pada beberapa menit ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perhatikan bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam menit saat ini.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Mengindikasikan apakah nilai tanggalwaktu yang diberikan `dateTime` terjadi dalam beberapa menit ke depan, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam menit saat ini.

-   `dateTime`: Nilai `datetime`, atau `datetimezone` yang akan dievaluasi.
-   `minutes`: Jumlah menit.


## Examples

### Example #1
Tentukan apakah menit setelah waktu sistem saat ini dalam dua menit berikutnya.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
