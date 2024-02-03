---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Menunjukkan apakah tanggal ini muncul selama bulan ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Menunjukkan apakah nilai datetime tertentu <code>dateTime</code> muncul selama bulan ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      </ul>


## Examples

### Example #1 
Menentukan apakah waktu sistem saat ini terdapat dalam bulan ini.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
