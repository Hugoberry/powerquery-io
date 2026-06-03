---
title: Date.AddYears
---

# Date.AddYears


Ajoute les années spécifiées à la date.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Retourne le résultat `date`, `datetime` ou `datetimezone` de l'ajout de `numberOfYears` à une valeur `datetime` `dateTime`.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` à laquelle les années sont ajoutées.
-   `numberOfYears` : nombre d'années à ajouter.


## Examples

### Example #1
Ajoute 4 années à la valeur `date`, `datetime` ou `datetimezone` représentant la date 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Ajoute 10 années à la valeur `date`, `datetime` ou `datetimezone` représentant la date et l'heure 5/14/2011 08:15:22 AM.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
