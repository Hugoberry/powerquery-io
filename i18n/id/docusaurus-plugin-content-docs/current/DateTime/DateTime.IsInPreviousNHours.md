---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


## Description

Menentukan apakah tanggalwaktu ini terjadi dalam beberapa jam sebelumnya, seperti yang ditentukan oleh tanggal dan waktu dalam sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam jam ini.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Menentukan apakah nilai tanggalwaktu yang diberikan <code>dateTime</code> terjadi dalam beberapa jam sebelumnya, seperti yang ditentukan oleh tanggal dan waktu dalam sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam jam ini.      <ul>      <li><code>dateTime</code>: Nilai <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      <li><code>hours</code>: Jumlah jam.</li>      </ul>


## Examples

### Example #1 
Tentukan apakah jam sebelum waktu sistem saat ini dalam dua jam sebelumnya.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
