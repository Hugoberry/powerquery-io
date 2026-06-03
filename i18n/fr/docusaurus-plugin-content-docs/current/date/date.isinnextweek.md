---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


Indique si cette valeur datetime se produit dans la semaine suivante, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la semaine actuelle.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans la semaine suivante, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la semaine actuelle.

-   `dateTime` : Valeur `date`, `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si la semaine suivante l'heure système actuelle correspond à la semaine suivante.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
