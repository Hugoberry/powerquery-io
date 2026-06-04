---
title: Time.Hour
---

# Time.Hour


Returnează componenta hour.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Returnează componenta hour a valorii `time`, `datetime` sau `datetimezone` furnizate, `dateTime`.


## Examples

### Example #1
Găsiţi ora din #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
