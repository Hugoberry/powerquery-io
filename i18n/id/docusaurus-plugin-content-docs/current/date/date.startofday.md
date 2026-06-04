---
title: Date.StartOfDay
---

# Date.StartOfDay


Menghasilkan awal hari.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Mengembalikan awal hari yang ditunjukkan oleh `dateTime`. `dateTime` harus berupa `date`, `datetime`, atau `datetimezone` value.


## Examples

### Example #1
Temukan awal hari untuk 10 Oktober 2011, 08:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
