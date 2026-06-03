---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Retourne un nombre indiquant dans quel trimestre de l'année la date se situe.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Retourne un nombre de 1 à 4 indiquant dans quel trimestre de l'année la date `dateTime` se situe. `dateTime` peut être une valeur `date`, `datetime` ou `datetimezone`.


## Examples

### Example #1
Recherche dans quel trimestre la date #date(2011, 12, 31) se situe.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
