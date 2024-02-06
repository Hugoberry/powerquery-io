---
title: Time.Hour
---

# Time.Hour


Devuelve el componente de hora.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Devuelve el componente de hora del valor <code>time</code>, <code>datetime</code> o <code>datetimezone</code> proporcionado, <code>dateTime</code>.


## Examples

### Example #1 
Buscar la hora en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
