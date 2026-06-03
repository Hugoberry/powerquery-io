---
title: Date.AddQuarters
---

# Date.AddQuarters


Ajoute les trimestres spécifiés à la date.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Retourne le résultat `date`, `datetime` ou `datetimezone` de l'ajout de `numberOfQuarters` trimestres à la valeur `datetime` `dateTime`.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` à laquelle les trimestres sont ajoutés.
-   `numberOfQuarters` : nombre de trimestres à ajouter.


## Examples

### Example #1
Ajoute 1 trimestre à la valeur `date`, `datetime` ou `datetimezone` représentant la date 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
