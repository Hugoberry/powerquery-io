---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Indique si cette valeur datetime se produit dans le nombre d'heures précédentes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l'heure actuelle.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans le nombre d'heures précédentes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans l'heure actuelle.

-   `dateTime` : Valeur `datetime` ou `datetimezone` à évaluer.
-   `hours` : Nombre d'heures.


## Examples

### Example #1
Détermine si l'heure précédant l'heure système actuelle tombe pendant les deux heures précédentes.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
