---
title: Date.EndOfDay
---

# Date.EndOfDay


Menghasilkan akhir hari.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Mengembalikan akhir hari yang ditunjukkan oleh `dateTime`. Informasi zona waktu dipertahankan.

-   `dateTime`: `date`, nilai `datetime`, atau `datetimezone` dari mana akhir hari dihitung.


## Examples

### Example #1
Mengambil akhir hari untuk 5/14/2011 05:00:00 PM.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2
Mengambil akhir hari untuk 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
