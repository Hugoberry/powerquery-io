---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


Indique si cette valeur datetime se produit dans l'année précédente, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l'année actuelle.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans l'année précédente, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l'année actuelle.

-   `dateTime` : Valeur `date`, `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si l'année précédent l'heure système actuelle correspond à l'année précédente.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
