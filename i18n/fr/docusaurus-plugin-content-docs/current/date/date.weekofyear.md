---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Retourne un nombre compris entre 1 et 54 qui indique dans quelle semaine de l'année cette date se situe.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Retourne un nombre compris entre 1 et 54 qui indique la semaine de l'année dans laquelle tombe la date `dateTime`.

-   `dateTime` : Une valeur `datetime` pour laquelle la semaine de l'année est déterminée.
-   `firstDayOfWeek` : Une valeur`Day.Type` facultative indiquant le jour qui marque le début d'une nouvelle semaine (par exemple, `Day.Sunday`). Si elle n'est pas spécifiée, une valeur par défaut dépendante de la culture est utilisée.


## Examples

### Example #1
Déterminez quelle semaine de l’année contient le 27 mars 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Déterminez quelle semaine de l’année contient le 27 mars 2011, en utilisant lundi comme début de semaine.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
