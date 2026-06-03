---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


Indique si cette valeur datetime se produit dans le nombre de minutes précédentes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la minute actuelle.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Indique si la valeur datetime `dateTime` donnée se produit dans le nombre de minutes précédentes, par rapport à la date et l'heure actuelles du système. Notez que cette fonction retourne la valeur false si la valeur transmise se produit dans la minute actuelle.

-   `dateTime` : Valeur `datetime` ou `datetimezone` à évaluer.
-   `minutes` : Nombre de minutes.


## Examples

### Example #1
Détermine si la minute précédant l'heure système actuelle tombe pendant les deux minutes précédentes.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
