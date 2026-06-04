---
title: Time.Hour
---

# Time.Hour


Menghasilkan komponen jam.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Menghasilkan komponen jam dengan nilai `time`, `datetime`, atau `datetimezone` yang tersedia, `dateTime`.


## Examples

### Example #1
Mencari jam dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
