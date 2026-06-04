---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Menentukan apakah tanggalwaktu ini terjadi dalam beberapa detik sebelumnya, seperti yang ditentukan oleh tanggal dan waktu dalam sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam detik ini.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Menentukan apakah nilai tanggalwaktu yang diberikan `dateTime` terjadi dalam beberapa detik sebelumnya, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diisi nilai yang muncul dalam detik ini.

-   `dateTime`: Nilai `datetime`, atau `datetimezone` yang akan dievaluasi.
-   `seconds`: Jumlah detik.


## Examples

### Example #1
Tentukan apakah detik sebelum waktu sistem saat ini dalam dua detik sebelumnya.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
