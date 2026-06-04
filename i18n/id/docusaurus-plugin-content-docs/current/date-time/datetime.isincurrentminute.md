---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Mengindikasikan apakah tanggal waktu ini terjadi dalam menit saat ini, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Mengindikasikan apakah nilai tanggal waktu yang diberikan `dateTime` terjadi dalam menit saat ini, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem.

-   `dateTime`: Nilai `datetime`, atau `datetimezone` akan dievaluasi.


## Examples

### Example #1
Tentukan apakah waktu sistem saat ini dalam menit saat ini.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
