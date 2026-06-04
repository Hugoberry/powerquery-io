---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Menentukan apakah tanggalwaktu ini terjadi dalam beberapa jam sebelumnya, seperti yang ditentukan oleh tanggal dan waktu dalam sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam jam ini.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Menentukan apakah nilai tanggalwaktu yang diberikan `dateTime` terjadi dalam beberapa jam sebelumnya, seperti yang ditentukan oleh tanggal dan waktu dalam sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam jam ini.

-   `dateTime`: Nilai `datetime`, atau `datetimezone` yang akan dievaluasi.
-   `hours`: Jumlah jam.


## Examples

### Example #1
Tentukan apakah jam sebelum waktu sistem saat ini dalam dua jam sebelumnya.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
