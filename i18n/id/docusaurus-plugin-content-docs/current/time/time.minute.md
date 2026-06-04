---
title: Time.Minute
---

# Time.Minute


Menghasilkan komponen menit.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Menghasilkan komponen menit dengan nilai `time`, `datetime`, atau `datetimezone` yang tersedia, `dateTime`.


## Examples

### Example #1
Mencari menit dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
