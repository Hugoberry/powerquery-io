---
title: Date.AddDays
---

# Date.AddDays


Ajoute les jours spécifiés à la date.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Retourne le résultat `date`, `datetime` ou `datetimezone` de l'ajout de `numberOfDays` jours à la valeur `datetime` `dateTime`.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` à laquelle les jours sont ajoutés.
-   `numberOfDays` : nombre de jours à ajouter.


## Examples

### Example #1
Ajoute 5 jours à la valeur `date`, `datetime` ou `datetimezone` représentant la date 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
