---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Mengindikasikan apakah tanggal waktu ini terjadi dalam detik saat ini, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Mengindikasikan apakah nilai tanggal waktu yang diberikan <code>dateTime</code> terjadi dalam detik saat ini, yang ditentukan oleh tanggal dan waktu saat ini pada sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>datetime</code>, atau <code>datetimezone</code> akan dievaluasi.</li>      </ul>


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
