---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Indique si cette date correspond à l'année actuelle, déterminée par la date et l'heure actuelles du système.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` fournie correspond à l'année actuelle, déterminée par la date et l'heure actuelles du système.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si l'heure système actuelle correspond à l'année actuelle.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
