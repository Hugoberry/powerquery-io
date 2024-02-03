---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


## Description

Menentukan apakah tanggal ini muncul dalam hari sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam hari saat ini.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Details

Menentukan apakah nilai tanggalwaktu yang diberikan <code>dateTime</code> muncul pada hari sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam hari ini.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      </ul>


## Examples

### Example #1 
Menentukan apakah hari sebelum waktu sistem saat ini terdapat dalam hari sebelumnya.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
