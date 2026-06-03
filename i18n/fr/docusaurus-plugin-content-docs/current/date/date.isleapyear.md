---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Indique si cette date se situe dans une année bissextile.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime spécifiée `dateTime` se situe dans une année bissextile.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si l'année 2012, telle que représentée par `#date(2012, 01, 01)`, est une année bissextile.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
