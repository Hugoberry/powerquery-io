---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Devuelve un número que indica en qué trimestre el año cae la fecha.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Devuelve un número del 1 al 4 que indica en qué trimestre el año cae la fecha <code>dateTime</code>. <code>dateTime</code> puede ser un valor <code>date</code><code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Buscar en qué trimestre del año cae la fecha #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
