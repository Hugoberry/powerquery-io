---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


## Description

Mengindikasikan apakah tanggal waktu ini terjadi dalam menit saat ini, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Details

Mengindikasikan apakah nilai tanggal waktu yang diberikan <code>dateTime</code> terjadi dalam menit saat ini, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>datetime</code>, atau <code>datetimezone</code> akan dievaluasi.</li>      </ul>


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
