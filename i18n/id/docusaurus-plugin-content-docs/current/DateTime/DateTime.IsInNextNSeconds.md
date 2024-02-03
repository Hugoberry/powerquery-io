---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


## Description

Mengindikasikan apakah tanggalwaktu ini terjadi pada beberapa detik ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini pada sistem. Perhatikan bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam detik saat ini.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Mengindikasikan apakah nilai tanggalwaktu yang diberikan <code>dateTime</code> terjadi dalam beberapa detik ke depan, yang ditentukan oleh tanggal dan waktu saat ini dalam sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam detik saat ini.      <ul>      <li><code>dateTime</code>: Nilai <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      <li><code>seconds</code>: Jumlah detik.</li>      </ul>


## Examples

### Example #1 
Tentukan apakah detik setelah waktu sistem saat ini dalam dua detik berikutnya.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
