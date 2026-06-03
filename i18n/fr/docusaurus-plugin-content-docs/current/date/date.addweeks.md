---
title: Date.AddWeeks
---

# Date.AddWeeks


Ajoute les semaines spécifiées à la date.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Retourne le résultat `date`, `datetime` ou `datetimezone` de l'ajout de `numberOfWeeks` semaines à la valeur `datetime` `dateTime`.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` à laquelle les semaines sont ajoutées.
-   `numberOfWeeks` : nombre de semaines à ajouter.


## Examples

### Example #1
Ajoute 2 semaines à la valeur `date`, `datetime` ou `datetimezone` représentant la date 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
