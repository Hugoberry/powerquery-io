---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Indique si cette valeur datetime se produit dans le nombre de secondes précédentes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la seconde actuelle.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans le nombre de secondes précédentes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la seconde actuelle.

-   `dateTime` : Valeur `datetime` ou `datetimezone` à évaluer.
-   `seconds` : Nombre de secondes.


## Examples

### Example #1
Détermine si la seconde précédant l'heure système actuelle tombe pendant les deux secondes précédentes.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
