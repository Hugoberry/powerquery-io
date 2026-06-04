---
title: Time.Second
---

# Time.Second


Mengembalikan komponen saat.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Mengembalikan komponen saat bagi nilai `time`, `datetime` atau `datetimezone`, `dateTime`.


## Examples

### Example #1
Cari nilai kedua daripada nilai tarikhmasa.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
