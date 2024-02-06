---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Indique si cette date correspond au jour actuel, déterminé par la date et l&#39;heure actuelles du système.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime <code>dateTime</code> fournie correspond au jour actuel, déterminé par la date et l'heure actuelles du système.      <ul>      <li><code>dateTime</code> : valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      </ul>


## Examples

### Example #1 
Détermine si l&#39;heure système actuelle correspond au jour actuel.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
