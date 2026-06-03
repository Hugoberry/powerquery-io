---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Indique si cette date correspond à la semaine actuelle, déterminée par la date et l'heure actuelles du système.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` fournie correspond à la semaine actuelle, déterminée par la date et l'heure actuelles du système.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si l'heure système actuelle correspond à la semaine actuelle.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
