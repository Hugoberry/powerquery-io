---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Mengindikasikan apakah tanggal waktu ini terjadi selama jam saat ini, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Mengindikasikan apakah nilai tanggal waktu yang diberikan `dateTime` terjadi selama jam saat ini, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem.

-   `dateTime`: Nilai `datetime`, atau `datetimezone` akan dievaluasi.


## Examples

### Example #1
Tentukan apakah waktu sistem saat ini berada dalam jam saat ini.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
