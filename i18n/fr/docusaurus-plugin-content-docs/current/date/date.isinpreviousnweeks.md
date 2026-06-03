---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Indique si cette valeur datetime se produit dans le nombre de semaines précédentes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la semaine actuelle.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans le nombre de semaines précédentes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la semaine actuelle.

-   `dateTime` : Valeur `date`, `datetime` ou `datetimezone` à évaluer.
-   `weeks` : Nombre de semaines.


## Examples

### Example #1
Détermine si la semaine qui précède l'heure système actuelle tombe pendant les deux semaines précédentes.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
