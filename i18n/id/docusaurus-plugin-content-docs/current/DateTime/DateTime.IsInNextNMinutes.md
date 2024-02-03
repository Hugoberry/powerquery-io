---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Mengindikasikan apakah tanggalwaktu ini terjadi pada beberapa menit ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perhatikan bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam menit saat ini.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Mengindikasikan apakah nilai tanggalwaktu yang diberikan <code>dateTime</code> terjadi dalam beberapa menit ke depan, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam menit saat ini.      <ul>      <li><code>dateTime</code>: Nilai <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      <li><code>minutes</code>: Jumlah menit.</li>      </ul>


## Examples

### Example #1 
Tentukan apakah menit setelah waktu sistem saat ini dalam dua menit berikutnya.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
