---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

Mengindikasikan apakah tanggalwaktu ini terjadi dalam beberapa jam ke depan, seperti yang ditentukan oleh tanggal dan waktu dalam sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam jam saat ini.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Mengindikasikan apakah nilai tanggalwaktu yang diberikan <code>dateTime</code> terjadi dalam beberapa jam ke depan, seperti yang ditentukan oleh tanggal dan waktu saat ini dalam sistem. Perlu diketahui bahwa fungsi ini akan menampilkan false jika diberikan nilai yang muncul dalam jam saat ini.      <ul>      <li><code>dateTime</code>: Nilai <code>datetime</code>, atau <code>datetimezone</code> yang akan dievaluasi.</li>      <li><code>hours</code>: Jumlah jam.</li>      </ul>


## Examples

### Example #1 
Tentukan apakah jam setelah waktu sistem saat ini dalam dua jam berikutnya.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
