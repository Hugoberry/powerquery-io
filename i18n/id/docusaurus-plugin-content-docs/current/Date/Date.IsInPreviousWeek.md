---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


## Description

Menentukan apakah tanggal ini muncul dalam minggu sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam minggu saat ini.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Details

Menentukan apakah nilai tanggalwaktu yang diberikan <code>dateTime</code> muncul pada minggu sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam minggu ini.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      </ul>


## Examples

### Example #1 
Menentukan apakah pekan sebelum waktu sistem saat ini terdapat dalam pekan sebelumnya.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
