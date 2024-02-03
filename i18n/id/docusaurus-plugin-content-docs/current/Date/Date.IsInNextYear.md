---
title: Date.IsInNextYear
---

# Date.IsInNextYear


## Description

Menentukan apakah tanggal ini muncul dalam tahun berikutnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam tahun saat ini.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Details

Menentukan apakah nilai tanggalwaktu yang diberikan <code>dateTime</code> muncul pada tahun berikutnya, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam tahun ini.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      </ul>


## Examples

### Example #1 
Menentukan apakah tahun setelah waktu sistem saat ini terdapat dalam tahun berikutnya.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
