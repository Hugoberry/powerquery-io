---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Indique si cette valeur datetime se produit dans le nombre d'années suivantes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l'année actuelle.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans le nombre d'années suivantes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l'année actuelle.

-   `dateTime` : Valeur `date`, `datetime` ou `datetimezone` à évaluer.
-   `years` : Nombre d'années.


## Examples

### Example #1
Détermine si l'année qui suit l'heure système actuelle tombe pendant les deux prochaines années.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
