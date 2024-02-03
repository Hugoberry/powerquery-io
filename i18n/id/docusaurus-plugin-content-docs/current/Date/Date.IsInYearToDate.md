---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Menunjukkan apakah tanggal ini muncul selama tahun ini dan terdapat pada atau sebelum hari ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Menunjukkan apakah nilai datetime tertentu <code>dateTime</code> muncul selama tahun ini dan terdapat pada atau sebelum hari ini, seperti ditetapkan berdasarkan tanggal dan waktu saat ini pada sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      </ul>


## Examples

### Example #1 
Menentukan apakah waktu sistem saat ini terdapat dalam tahun berjalan.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
