---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Indique si cette valeur datetime se produit dans le nombre de minutes suivantes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la minute actuelle.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans le nombre de minutes suivantes, par rapport à la date et l'heure actuelles du système. Notez que la fonction retourne la valeur false si la valeur transmise se produit dans la minute actuelle.

-   `dateTime` : Valeur `datetime` ou `datetimezone` à évaluer.
-   `minutes` : Nombre de minutes.


## Examples

### Example #1
Détermine si la minute qui suit l'heure système actuelle tombe pendant les deux prochaines minutes.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
