---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Indique si cette date/heure tombe pendant la minute actuelle, déterminée par la date et l'heure actuelles du système.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime spécifiée `dateTime` tombe pendant la minute actuelle, déterminée par la date et l'heure actuelles du système.

-   `dateTime` : une valeur `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si l'heure système actuelle correspond à la minute actuelle.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
