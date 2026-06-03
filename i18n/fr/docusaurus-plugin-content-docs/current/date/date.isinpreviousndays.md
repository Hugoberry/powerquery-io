---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


Indique si cette valeur datetime se produit dans le nombre de jours précédents, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la journée actuelle.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans le nombre de jours précédents, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la journée actuelle.

-   `dateTime` : Valeur `date`, `datetime` ou `datetimezone` à évaluer.
-   `days` : Nombre de jours.


## Examples

### Example #1
Détermine si le jour qui précède l'heure système actuelle tombe pendant les deux jours précédents.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
