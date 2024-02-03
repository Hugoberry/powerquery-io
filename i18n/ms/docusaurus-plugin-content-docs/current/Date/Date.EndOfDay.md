---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Mengembalikan penghujung hari.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

Mengembalikan penghujung hari yang diwakili oleh <code>dateTime</code>. Maklumat zon waktu dikekalkan.      <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> untuk mengira penghujung hari.</li>      </ul>


## Examples

### Example #1 
Dapatkan penghujung hari untuk 5/14/2011 05:00:00 PM.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Dapatkan penghujung hari untuk 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
