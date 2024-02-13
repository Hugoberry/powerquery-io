---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Renvoie le début du trimestre.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Renvoie le début du trimestre qui contient <code>dateTime</code>.      <code>dateTime</code> doit être une valeur <code>date</code>, <code>datetime</code>, ou <code>datetimezone</code>.


## Examples

### Example #1 
Recherchez le début du trimestre du 10 octobre 2011 à 8h00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
