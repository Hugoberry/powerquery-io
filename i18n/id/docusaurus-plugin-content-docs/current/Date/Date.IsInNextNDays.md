---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


## Description

Menentukan apakah tanggal ini muncul dalam beberapa hari berikutnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam hari ini.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Menentukan apakah nilai tanggalwaktu yang diberikan <code>dateTime</code> terjadi pada beberapa hari berikutnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam hari saat ini.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, atau <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      <li><code>days</code>: Jumlah hari.</li>      </ul>


## Examples

### Example #1 
Menentukan apakah tanggal setelah waktu sistem saat ini terjadi dua hari lagi.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
