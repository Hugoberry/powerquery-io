---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Indique si cette valeur datetime se produit dans la seconde précédente, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la seconde actuelle.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans la seconde précédente, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la seconde actuelle.

-   `dateTime` : Valeur `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si la seconde précédant l'heure système actuelle tombe pendant la seconde précédente.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
