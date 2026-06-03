---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Indique si cette date correspond au mois actuel, déterminé par la date et l'heure actuelles du système.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` fournie correspond au mois actuel, déterminé par la date et l'heure actuelles du système.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si l'heure système actuelle correspond au mois actuel.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
