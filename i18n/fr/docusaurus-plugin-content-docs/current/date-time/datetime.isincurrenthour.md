---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Indique si cette date/heure tombe pendant l'heure actuelle, déterminée par la date et l'heure actuelles du système.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime spécifiée `dateTime` tombe pendant l'heure actuelle, déterminée par la date et l'heure actuelles du système.

-   `dateTime` : une valeur `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si l'heure système actuelle correspond à l'heure actuelle.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
