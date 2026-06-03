---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Indique si cette valeur datetime se produit dans le nombre de trimestres précédents, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le trimestre actuel.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans le nombre de trimestres précédents, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans le trimestre actuel.

-   `dateTime` : Valeur `date`, `datetime` ou `datetimezone` à évaluer.
-   `quarters` : Nombre de trimestres.


## Examples

### Example #1
Détermine si le trimestre qui précède l'heure système actuelle tombe pendant les deux trimestres précédents.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
