---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Indique si cette date correspond au jour actuel, déterminé par la date et l'heure actuelles du système.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` fournie correspond au jour actuel, déterminé par la date et l'heure actuelles du système.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si l'heure système actuelle correspond au jour actuel.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
