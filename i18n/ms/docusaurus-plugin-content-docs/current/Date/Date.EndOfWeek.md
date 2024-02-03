---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Mengembalikan penghujung minggu.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Mengembalikan penghujung minggu yang mengandungi <code>dateTime</code>.    Fungsi ini mengambil <code>Day</code> pilihan, <code>firstDayOfWeek</code>, untuk ditetapkan sebagai hari pertama dalam minggu bagi pengiraan relatif ini. Nilai lalai ialah <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> untuk mengira hari terakhir dalam minggu</li>        <li><code>firstDayOfWeek</code>: <i>[Pilihan]</i> Nilai <code>Day.Type</code> mewakili hari pertama dalam minggu. Nilai yang mungkin ialah <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> dan <code>Day.Saturday.</code> . Nilai lalai ialah <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Dapatkan penghujung minggu untuk 5/14/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Dapatkan hujung minggu untuk 5/17/2011 05:00:00 PM -7:00, dengan Ahad sebagai hari pertama dalam minggu.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
