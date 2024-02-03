---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Menunjukkan apakah tanggal ini muncul selama kuartal ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Menunjukkan apakah nilai datetime tertentu <code>dateTime</code> muncul selama kuartal ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      </ul>


## Examples

### Example #1 
Menentukan apakah waktu sistem saat ini terdapat dalam kuartal ini.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
