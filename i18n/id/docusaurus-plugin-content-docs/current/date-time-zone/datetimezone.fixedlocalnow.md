---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


Menghasilkan tanggal & waktu saat ini dalam zona waktu lokal. Nilai ini tetap dan tidak akan berubah dengan pemanggilan berturut-turut.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

Menghasilkan nilai `datetime` yang ditetapkan ke tanggal dan waktu saat ini pada sistem. Nilai yang dihasilkan berisi informasi timezone yang menunjukkan timezone lokal. Nilai ini tetap dan tidak akan berubah dengan pemanggilan berturut-turut, tidak seperti DateTimeZone.LocalNow, yang mungkin menghasilkan nilai berbeda pada rangkaian eksekusi ekspresi.



## Category
DateTimeZone
