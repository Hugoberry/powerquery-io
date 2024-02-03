---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


## Description

Mengindikasikan apakah tanggalwaktu ini terjadi pada satu detik ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perhatikan bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam detik saat ini.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Details

Mengindikasikan apakah nilai tanggalwaktu yang diberikan <code>dateTime</code> terjadi pada satu detik ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam detik saat ini.      <ul>      <li><code>dateTime</code>: Nilai <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      </ul>


## Examples

### Example #1 
Tentukan apakah detik setelah waktu sistem saat ini dalam detik berikutnya.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
