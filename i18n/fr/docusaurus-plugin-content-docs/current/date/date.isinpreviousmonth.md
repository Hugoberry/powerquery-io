---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


Indique si cette valeur datetime se produit dans le mois précédent, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le mois actuel.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans le mois précédent, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le mois actuel.

-   `dateTime` : Valeur `date`, `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si le mois précédent l'heure système actuelle correspond au mois précédent.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
