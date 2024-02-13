---
title: Date.EndOfDay
---

# Date.EndOfDay


Renvoie la fin de la journée.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Renvoie la fin de la journée représentée par <code>dateTime</code>. Les informations de fuseau horaire sont conservées.      <ul>        <li><code>dateTime</code> : une valeur <code>date</code>, <code>datetime</code>, ou <code>datetimezone</code> à partir de laquelle la fin de la journée est calculée.</li>      </ul>


## Examples

### Example #1 
Obtient la fin du jour pour 5/14/2011 05:00:00 PM.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Obtient la fin du jour pour 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
