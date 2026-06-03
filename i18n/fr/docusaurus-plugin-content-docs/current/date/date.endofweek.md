---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Renvoie la fin de la semaine.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Retourne à la fin de la semaine qui contient `dateTime`. Cette fonction prend un `Day` facultatif `firstDayOfWeek` à définir comme premier jour de la semaine pour ce calcul relatif. La valeur par défaut est `Day.Sunday`.

-   `dateTime` : Une valeur `date`, `datetime` ou `datetimezone` à partir de laquelle le dernier jour de la semaine est calculé
-   `firstDayOfWeek` : *(Facultatif)* Une valeur `Day.Type` représentant le premier jour de la semaine. Les valeurs possibles sont `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` et `Day.Saturday`. La valeur par défaut est `Day.Sunday`.


## Examples

### Example #1
Obtient la fin de la semaine pour 5/14/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Obtient la fin de semaine pour 5/17/2011 05:00:00 PM -7:00, avec dimanche comme premier jour de la semaine.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
