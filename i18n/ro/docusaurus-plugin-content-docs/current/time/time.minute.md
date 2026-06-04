---
title: Time.Minute
---

# Time.Minute


Returnează componenta minute.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Returnează componenta minute din valoarea `time`, `datetime` sau `datetimezone` furnizată, `dateTime`.


## Examples

### Example #1
Găsiţi minutul din #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
