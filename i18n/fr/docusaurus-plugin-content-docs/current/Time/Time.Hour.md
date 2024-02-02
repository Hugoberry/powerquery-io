---
title: Time.Hour
---

# Time.Hour


## Description

Retourne le composant d&#39;heure.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Retourne le composant d'heure de la valeur <code>time</code>, <code>datetime</code> ou <code>datetimezone</code> fournie, <code>dateTime</code>.


## Examples

### Example #1 
Recherche l&#39;heure dans #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
