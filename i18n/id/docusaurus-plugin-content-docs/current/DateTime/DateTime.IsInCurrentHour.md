---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Mengindikasikan apakah tanggal waktu ini terjadi selama jam saat ini, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Mengindikasikan apakah nilai tanggal waktu yang diberikan <code>dateTime</code> terjadi selama jam saat ini, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>datetime</code>, atau <code>datetimezone</code> akan dievaluasi.</li>      </ul>


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
