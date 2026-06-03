---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Indique si cette valeur datetime se produit dans l'heure précédente, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l'heure actuelle.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans l'heure précédente, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l'heure actuelle.

-   `dateTime` : Valeur `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si l'heure précédant l'heure système actuelle tombe pendant l'heure précédente.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
