---
title: Time.EndOfHour
---

# Time.EndOfHour


Mengembalikan penghujung jam.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Mengembalikan penghujung jam yang diwakili oleh `dateTime`, termasuk pecahan saat. Maklumat zon waktu dikekalkan.

-   `dateTime`: Nilai `time`, `datetime` atau `datetimezone` untuk mengira penghujung jam.


## Examples

### Example #1
Dapatkan penghujung jam untuk 5/14/2011 05:00:00 PM.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Dapatkan penghujung jam untuk 5/17/2011 05:00:00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
