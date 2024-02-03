---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Menghasilkan akhir minggu.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Mengembalikan akhir minggu yang berisi <code>dateTime</code>.    Fungsi ini memerlukan <code opsional>Hari</code>, <code>firstDayOfWeek</code>, untuk ditetapkan sebagai hari pertama dalam seminggu untuk penghitungan relatif ini. Nilai defaultnya adalah <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> nilai yang dihitung hari terakhir dalam seminggu</li>        <li><code>firstDayOfWeek</code>:  <i>[Opsional]</i> Nilai <code>Day.Type</code> yang mewakili hari pertama dalam seminggu. Nilai yang mungkin <code>Hari</code>, <code>Hari.Senin</code>, <code>Hari.Selasa</code>, <code>Hari</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> dan <code>Day.Saturday.</code>. Nilai defaultnya adalah <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Mengambil akhir pekan untuk 5/14/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Mengambil akhir pekan untuk 5/17/2011 05:00:00 PM -7:00, dengan Minggu sebagai hari pertama dalam pekan.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
