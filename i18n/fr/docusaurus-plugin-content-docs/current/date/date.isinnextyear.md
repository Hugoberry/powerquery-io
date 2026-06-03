---
title: Date.IsInNextYear
---

# Date.IsInNextYear


Indique si cette valeur datetime se produit dans l'année suivante, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l'année actuelle.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans l'année suivante, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l'année actuelle.

-   `dateTime` : Valeur `date`, `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si l'année suivant l'heure système actuelle correspond à l'année suivante.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
