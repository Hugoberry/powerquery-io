---
title: Time.Hour
---

# Time.Hour


Retorna el component hora.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Retorna el component hora del valor `time`, `datetime` o `datetimezone` proporcionat, `dateTime`.


## Examples

### Example #1
Troba l'hora en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
