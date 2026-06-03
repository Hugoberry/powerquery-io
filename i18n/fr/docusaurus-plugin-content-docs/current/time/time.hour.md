---
title: Time.Hour
---

# Time.Hour


Retourne le composant d'heure.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Retourne le composant d'heure de la valeur `time`, `datetime` ou `datetimezone` fournie, `dateTime`.


## Examples

### Example #1
Recherche l'heure dans #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
