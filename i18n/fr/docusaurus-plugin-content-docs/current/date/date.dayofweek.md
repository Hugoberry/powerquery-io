---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Retourne un nombre (entre 0 et 6) indiquant le jour de la semaine de la valeur fournie.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Retourne un nombre (entre 0 et 6) indiquant le jour de la semaine du `dateTime` fourni.

-   `dateTime` : Valeur `date`, `datetime` ou `datetimezone`.
-   `firstDayOfWeek` : Valeur `Day` indiquant le jour défini comme premier jour de la semaine. Les valeurs autorisées sont Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday ou Day.Saturday. Si elle n'est pas spécifiée, une valeur par défaut dépendante de la culture est utilisée.


## Examples

### Example #1
Obtenez le jour de la semaine représenté par lundi 21 février 2011, dimanche étant le premier jour de la semaine.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
Obtenez le jour de la semaine représenté par lundi 21 février 2011, lundi étant le premier jour de la semaine.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
