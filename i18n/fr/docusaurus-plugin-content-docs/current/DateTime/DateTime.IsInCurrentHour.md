---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Indique si cette date/heure tombe pendant l&#39;heure actuelle, déterminée par la date et l&#39;heure actuelles du système.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Indique si la valeur datetime spécifiée <code>dateTime</code> tombe pendant l'heure actuelle, déterminée par la date et l'heure actuelles du système.      <ul>      <li><code>dateTime</code> : une valeur <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      </ul>


## Examples

### Example #1 
Détermine si l&#39;heure système actuelle correspond à l&#39;heure actuelle.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
