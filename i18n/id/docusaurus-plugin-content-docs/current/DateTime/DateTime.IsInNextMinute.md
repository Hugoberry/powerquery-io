---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


## Description

Mengindikasikan apakah tanggalwaktu ini terjadi pada satu menit ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam menit saat ini.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Details

Mengindikasikan apakah nilai tanggalwaktu ini <code>dateTime</code> terjadi pada satu menit ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini dalam sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam menit saat ini.      <ul>      <li><code>dateTime</code>: Nilai <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      </ul>


## Examples

### Example #1 
Tentukan apakah jam setelah waktu sistem saat ini dalam menit berikutnya.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
