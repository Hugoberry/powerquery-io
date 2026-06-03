---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Retourne un nombre compris entre 28 et 31 représentant le nombre de jours dans le mois.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Retourne le nombre de jours représentant le mois dans la valeur `date`, `datetime` ou `datetimezone`, `dateTime`.

-   `dateTime` : valeur `date`, `datetime` ou `datetimezone` pour laquelle le nombre de jours dans le mois est retourné.


## Examples

### Example #1
Nombre de jours du mois de décembre, tel que représenté par `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
