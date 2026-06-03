---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Indique si cette valeur datetime se produit dans le nombre de jours suivants, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la journée actuelle.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans le nombre de jours suivants, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la journée actuelle.

-   `dateTime` : Valeur `date`, `datetime` ou `datetimezone` à évaluer.
-   `days` : Nombre de jours.


## Examples

### Example #1
Détermine si le jour qui suit l'heure système actuelle tombe dans les deux jours suivants.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
