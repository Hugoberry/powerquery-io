---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Mengindikasikan apakah tanggalwaktu ini terjadi pada beberapa detik ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perhatikan bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam detik saat ini.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Mengindikasikan apakah nilai tanggalwaktu yang diberikan `dateTime` terjadi dalam beberapa detik ke depan, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam detik saat ini.

-   `dateTime`: Nilai `datetime`, atau `datetimezone` yang akan dievaluasi.
-   `seconds`: Jumlah detik.


## Examples

### Example #1
Tentukan apakah detik setelah waktu sistem saat ini dalam dua detik berikutnya.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
