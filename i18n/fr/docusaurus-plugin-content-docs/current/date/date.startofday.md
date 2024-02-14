---
title: Date.StartOfDay
---

# Date.StartOfDay


Renvoie le début de la journée.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Renvoie le début de la journée représenté par <code>dateTime</code>.    <code>dateTime</code> doit être une valeur <code>date</code>, <code>datetime</code>, ou <code>datetimezone</code>.


## Examples

### Example #1 
Recherchez le début de la journée du 10 octobre 2011, 08:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
