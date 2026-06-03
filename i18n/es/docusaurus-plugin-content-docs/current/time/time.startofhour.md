---
title: Time.StartOfHour
---

# Time.StartOfHour


Devuelve el inicio de la hora.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Devuelve el inicio de la hora representado por `dateTime`. `dateTime` debe ser un valor `time`, `datetime` o `datetimezone`.


## Examples

### Example #1
Buscar el inicio de la hora del 10 de octubre de 2011, 8:10:32 a.m.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
