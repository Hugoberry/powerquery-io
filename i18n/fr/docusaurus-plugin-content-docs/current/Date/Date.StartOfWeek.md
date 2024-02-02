---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Retourne le début de la semaine.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Renvoie le début du trimestre qui contient <code>dateTime</code>.    <code>dateTime</code> doit être une valeur <code>date</code>, <code>datetime</code>, ou <code>datetimezone</code>.


## Examples

### Example #1 
Recherche le début de la semaine pour le mardi 11 octobre 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Recherche le début de la semaine pour le mardi 11 octobre 2011, à l’aide du lundi comme début de la semaine.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
