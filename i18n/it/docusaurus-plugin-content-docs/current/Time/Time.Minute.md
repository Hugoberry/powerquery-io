---
title: Time.Minute
---

# Time.Minute


Restituisce il componente minuto.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Restituisce il componente minuto del valore <code>time</code>, <code>datetime</code> o <code>datetimezone</code> specificato <code>dateTime</code>.


## Examples

### Example #1 
Trovare il minuto in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
