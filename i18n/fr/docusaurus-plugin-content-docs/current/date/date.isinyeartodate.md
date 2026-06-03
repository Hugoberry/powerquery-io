---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Indique si cette date correspond à l'année actuelle et si elle correspond au jour actuel ou à un jour précédent, déterminé par la date et l'heure actuelles du système.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime fournie `dateTime` correspond à l'année actuelle et si elle correspond au jour actuel ou à un jour précédent, déterminé par la date et l'heure actuelles du système.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si l'heure système actuelle correspond à l'année actuelle.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
