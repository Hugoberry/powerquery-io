---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


Indique si cette valeur datetime se produit dans la semaine précédente, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la semaine actuelle.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans la semaine précédente, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la semaine actuelle.

-   `dateTime` : Valeur `date`, `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si la semaine précédent l'heure système actuelle correspond à la semaine précédente.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
