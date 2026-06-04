---
title: Time.Minute
---

# Time.Minute


Mengembalikan komponen minit.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Mengembalikan komponen minit bagi nilai `time`, `datetime` atau `datetimezone`, `dateTime`.


## Examples

### Example #1
Cari minit dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
