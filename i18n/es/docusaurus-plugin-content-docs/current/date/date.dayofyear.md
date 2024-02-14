---
title: Date.DayOfYear
---

# Date.DayOfYear


Devuelve un número del 1 al 366 que representa el día del año.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Devuelve un número que representa el día del año en el valor de <code>date</code>, <code>datetime</code> o <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Día del año del 1 de marzo de 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
