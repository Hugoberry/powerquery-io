---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


Indique si cette valeur datetime se produit dans la minute suivante, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la minute actuelle.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans la minute suivante, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la minute actuelle.

-   `dateTime`: Valeur `datetime` ou `datetimezone` à évaluer.


## Examples

### Example #1
Détermine si la minute suivant l'heure système actuelle tombe pendant la prochaine minute.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
