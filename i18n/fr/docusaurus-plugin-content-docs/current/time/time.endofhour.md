---
title: Time.EndOfHour
---

# Time.EndOfHour


Renvoie la fin de l’heure.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Renvoie la fin de l'heure représentée par `dateTime`, y compris les fractions de seconde. Les informations de fuseau horaire sont conservées.

-   `dateTime` : une valeur `time`, `datetime`, ou `datetimezone` à partir de laquelle la fin de l’heure est calculée.


## Examples

### Example #1
Obtient la fin de l'heure pour 5/14/2011 05:00:00 PM.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Obtient la fin de l'heure pour 5/17/2011 05:00:00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
