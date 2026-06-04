---
title: Time.StartOfHour
---

# Time.StartOfHour


Menghasilkan awal jam.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Mengembalikan awal jam yang ditunjukkan oleh `dateTime`. `dateTime` harus berupa `time`, `datetime` atau `datetimezone` value.


## Examples

### Example #1
Temukan awal jam untuk 10 Oktober 2011, 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
