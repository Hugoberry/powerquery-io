---
title: Date.Day
---

# Date.Day


Retourne le composant de jour.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Retourne le composant de jour d'une valeur `date`, `datetime` ou `datetimezone`.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` à partir de laquelle le composant de jour est extrait.


## Examples

### Example #1
Obtient le composant de jour d'une valeur `date`, `datetime` ou `datetimezone` représentant la date et l'heure 5/14/2011 05:00:00 PM.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
