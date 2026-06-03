---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


Indique si cette valeur datetime se produit dans le nombre de mois précédents, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le mois actuel.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans le nombre de mois précédents, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le mois actuel.

-   `dateTime` : Valeur `date`, `datetime` ou `datetimezone` à évaluer.
-   `months` : Nombre de mois.


## Examples

### Example #1
Détermine si le mois qui précède l'heure système actuelle tombe pendant les deux mois précédents.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
