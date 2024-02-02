---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Indique si cette date/heure tombe pendant la seconde actuelle, déterminée par la date et l&#39;heure actuelles du système.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Indique si la valeur datetime spécifiée <code>dateTime</code> tombe pendant la seconde actuelle, déterminée par la date et l'heure actuelles du système.      <ul>      <li><code>dateTime</code> : une valeur <code>datetime</code> ou <code>datetimezone</code> à évaluer.</li>      </ul>


## Examples

### Example #1 
Détermine si l&#39;heure système actuelle correspond à la seconde actuelle.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
