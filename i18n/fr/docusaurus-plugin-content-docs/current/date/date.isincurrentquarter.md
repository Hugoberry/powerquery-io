---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Indique si cette date correspond au trimestre actuel, déterminé par la date et l'heure actuelles du système.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` fournie correspond au trimestre actuel, déterminé par la date et l'heure actuelles du système.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si l'heure système actuelle correspond au trimestre actuel.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
