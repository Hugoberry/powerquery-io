---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


## Description

Mengindikasikan apakah tanggalwaktu ini terjadi pada satu jam ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam jam saat ini.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Details

Mengindikasikan apakah nilai tanggalwaktu yang diberikan <code>dateTime</code> terjadi pada satu jam ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam jam saat ini.      <ul>      <li><code>dateTime</code>: Nilai <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      </ul>


## Examples

### Example #1 
Tentukan apakah jam setelah waktu sistem saat ini berada dalam jam berikutnya.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
