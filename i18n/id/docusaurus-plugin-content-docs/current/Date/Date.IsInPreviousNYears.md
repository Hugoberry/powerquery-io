---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


## Description

Menentukan apakah tanggal ini muncul dalam beberapa tahun sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam tahun saat ini.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Menentukan apakah nilai tanggalwaktu yang diberikan <code>dateTime</code> muncul pada beberapa tahun sebelumnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam tahun ini.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      <li><code>years</code>: Jumlah tahun.</li>      </ul>


## Examples

### Example #1 
Menentukan apakah tahun setelah waktu sistem saat ini terjadi dua tahun lagi.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
