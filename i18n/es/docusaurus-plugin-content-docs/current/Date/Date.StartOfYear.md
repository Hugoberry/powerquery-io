---
title: Date.StartOfYear
---

# Date.StartOfYear


Devuelve el inicio del año.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Devuelve el inicio del año que contiene <code>dateTime</code>.    <code>dateTime</code> debe ser un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Buscar el inicio del año del 10 de octubre de 2011, 8:10:32 a.m.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
