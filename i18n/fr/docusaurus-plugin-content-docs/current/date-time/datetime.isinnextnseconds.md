---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Indique si cette valeur datetime se produit dans le nombre de secondes suivantes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la seconde actuelle.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans le nombre de secondes suivantes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la seconde actuelle.

-   `dateTime` : Valeur `datetime` ou `datetimezone` à évaluer.
-   `seconds` : Nombre de secondes.


## Examples

### Example #1
Détermine si la seconde qui suit l'heure système actuelle tombe pendant les deux prochaines secondes.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
