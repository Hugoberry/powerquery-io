---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Menunjukkan apakah tanggal ini muncul selama pekan ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Menunjukkan apakah nilai datetime tertentu <code>dateTime</code> muncul selama pekan ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      </ul>


## Examples

### Example #1 
Menentukan apakah waktu sistem saat ini terdapat dalam pekan ini.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
