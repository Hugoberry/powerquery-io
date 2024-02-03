---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Mengembalikan penghujung tahun.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Mengembalikan penghujung tahun yang mengandungi <code>dateTime</code>, termasuk pecahan saat. Maklumat zon waktu dikekalkan.      <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> untuk mengira penghujung tahun.</li>      </ul>


## Examples

### Example #1 
Dapatkan penghujung tahun untuk 5/14/2011 05:00:00 PM.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Dapatkan penghujung jam untuk 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
