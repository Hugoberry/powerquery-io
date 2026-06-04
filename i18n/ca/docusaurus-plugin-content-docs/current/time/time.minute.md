---
title: Time.Minute
---

# Time.Minute


Retorna el component minut.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Retorna el component minut del valor `time`, `datetime` o `datetimezone` proporcionat, `dateTime`.


## Examples

### Example #1
Troba el minut en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
