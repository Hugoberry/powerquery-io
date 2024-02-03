---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Menentukan apakah tanggal ini muncul dalam beberapa minggu sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam minggu saat ini.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Menentukan apakah nilai tanggalwaktu yang diberikan <code>dateTime</code> muncul pada beberapa minggu sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam minggu ini.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      <li><code>weeks</code>: Jumlah minggu.</li>      </ul>


## Examples

### Example #1 
Menentukan apakah minggu setelah waktu sistem saat ini terjadi dua minggu lagi.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
