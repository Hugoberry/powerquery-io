---
title: Time.Hour
---

# Time.Hour


Mengembalikan komponen jam.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Mengembalikan komponen jam bagi nilai `time`, `datetime` atau `datetimezone`, `dateTime`.


## Examples

### Example #1
Cari jam dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
