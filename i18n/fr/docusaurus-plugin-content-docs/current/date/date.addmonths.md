---
title: Date.AddMonths
---

# Date.AddMonths


Ajoute les mois spécifiés à la date.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Retourne le résultat `date`, `datetime` ou `datetimezone` de l'ajout de `numberOfMonths` mois à la valeur `datetime` `dateTime`.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` à laquelle les mois sont ajoutés.
-   `numberOfMonths` : nombre de mois à ajouter.


## Examples

### Example #1
Ajoute 5 mois à la valeur `date`, `datetime` ou `datetimezone` représentant la date 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Ajoute 18 mois à la valeur `date`, `datetime` ou `datetimezone` représentant la date et l'heure 5/14/2011 08:15:22 AM.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
