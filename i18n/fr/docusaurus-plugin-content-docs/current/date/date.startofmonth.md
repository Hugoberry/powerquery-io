---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Renvoie le début du mois.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Renvoie le début du mois qui contient <code>dateTime</code>.    <code>dateTime</code> doit être une valeur <code>date</code> ou <code>datetime</code>.


## Examples

### Example #1 
Recherchez le début du mois du 10 octobre 2011, 08:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
