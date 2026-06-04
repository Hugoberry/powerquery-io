---
title: Time.EndOfHour
---

# Time.EndOfHour


Menghasilkan akhir jam.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Menghasilkan akhir jam yang ditunjukkan oleh `dateTime`, termasuk detik pecahan. Informasi zona waktu dipertahankan.

-   `dateTime`: `time`, `datetime`, atau `datetimezone` nilai akhir jam dihitung.


## Examples

### Example #1
Mengambil angka belakang jam untuk 5/14/2011 05:00:00 PM.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Mengambil angka belakang jam untuk 5/17/2011 05:00:00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
