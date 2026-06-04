---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Mengindikasikan apakah tanggal waktu ini terjadi dalam detik saat ini, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Mengindikasikan apakah nilai tanggal waktu yang diberikan `dateTime` terjadi dalam detik saat ini, yang ditentukan oleh tanggal dan waktu saat ini pada sistem.

-   `dateTime`: Nilai `datetime`, atau `datetimezone` akan dievaluasi.


## Examples

### Example #1
Tentukan apakah waktu sistem saat ini dalam detik saat ini.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
