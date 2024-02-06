---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Devuelve el inicio del trimestre.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Devuelve el inicio del trimestre que contiene <code>dateTime</code>.    <code>dateTime</code> debe ser un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Buscar el principio del trimestre del 10 de octubre de 2011, 8:00 a.m.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
