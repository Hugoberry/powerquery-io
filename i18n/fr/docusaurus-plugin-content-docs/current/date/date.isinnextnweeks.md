---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


Indique si cette valeur datetime se produit dans le nombre de semaines suivantes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la semaine actuelle.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans le nombre de semaines suivantes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la semaine actuelle.

-   `dateTime` : Valeur `date`, `datetime` ou `datetimezone` à évaluer.
-   `weeks` : Nombre de semaines.


## Examples

### Example #1
Détermine si la semaine qui suit l'heure système actuelle tombe pendant les deux prochaines semaines.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
