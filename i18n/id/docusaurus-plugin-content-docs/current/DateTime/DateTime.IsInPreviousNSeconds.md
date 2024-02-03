---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


## Description

Menentukan apakah tanggalwaktu ini terjadi dalam beberapa detik sebelumnya, seperti yang ditentukan oleh tanggal dan waktu dalam sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diberikan nilai yang muncul dalam detik ini.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Menentukan apakah nilai tanggalwaktu yang diberikan <code>dateTime</code> terjadi dalam beberapa detik sebelumnya, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem. Perlu diketahui bahwa fungsi ini akan menghasilkan false jika diisi nilai yang muncul dalam detik ini.      <ul>      <li><code>dateTime</code>: Nilai <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      <li><code>seconds</code>: Jumlah detik.</li>      </ul>


## Examples

### Example #1 
Tentukan apakah detik sebelum waktu sistem saat ini dalam dua detik sebelumnya.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
