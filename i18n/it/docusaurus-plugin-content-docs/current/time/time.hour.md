---
title: Time.Hour
---

# Time.Hour


Restituisce il componente ora.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Restituisce il componente ora del valore `time`, `datetime` o `datetimezone` specificato `dateTime`.


## Examples

### Example #1
Trovare l'ora in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
