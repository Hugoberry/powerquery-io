---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Indique si cette date correspond à l&#39;année actuelle, déterminée par la date et l&#39;heure actuelles du système.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime <code>dateTime</code> fournie correspond à l'année actuelle, déterminée par la date et l'heure actuelles du système.      <ul>      <li><code>dateTime</code> : valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      </ul>


## Examples

### Example #1 
Détermine si l&#39;heure système actuelle correspond à l&#39;année actuelle.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
