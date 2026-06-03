---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


Indique si cette valeur datetime se produit dans la minute précédente, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la minute actuelle.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans la minute précédente, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la minute actuelle.

-   `dateTime` : Valeur `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si la minute précédant l'heure système actuelle tombe pendant la minute précédente.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
