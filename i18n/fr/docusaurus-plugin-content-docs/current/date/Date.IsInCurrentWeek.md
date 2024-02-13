---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Indique si cette date correspond à la semaine actuelle, déterminée par la date et l&#39;heure actuelles du système.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime <code>dateTime</code> fournie correspond à la semaine actuelle, déterminée par la date et l'heure actuelles du système.      <ul>      <li><code>dateTime</code> : valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      </ul>


## Examples

### Example #1 
Détermine si l&#39;heure système actuelle correspond à la semaine actuelle.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
