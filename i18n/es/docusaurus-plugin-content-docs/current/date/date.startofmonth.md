---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Devuelve el inicio del mes.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Devuelve el inicio del mes que contiene `dateTime`. `dateTime` debe ser un valor `date` o `datetime`.


## Examples

### Example #1
Buscar el inicio del mes del 10 de octubre de 2011, 8:10:32 a.m.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
