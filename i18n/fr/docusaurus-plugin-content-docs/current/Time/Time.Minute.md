---
title: Time.Minute
---

# Time.Minute


Retourne le composant des minutes.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Retourne le composant des minutes de la valeur <code>time</code>, <code>datetime</code> ou <code>datetimezone</code> fournie, <code>dateTime</code>.


## Examples

### Example #1 
Recherche la minute dans #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
