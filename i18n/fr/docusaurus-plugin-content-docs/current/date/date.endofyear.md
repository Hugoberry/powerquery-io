---
title: Date.EndOfYear
---

# Date.EndOfYear


Renvoie la fin de l’année.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Remarks

Renvoie la fin de l'année qui contient <code>dateTime</code>, y compris les fractions de seconde. Les informations de fuseau horaire sont conservées.      <ul>        <li><code>dateTime</code> : une valeur <code>date</code>, <code>datetime</code>, ou <code>datetimezone</code> à partir de laquelle la fin de l'année est calculée.</li>      </ul>


## Examples

### Example #1 
Obtient la fin de l&#39;année pour 5/14/2011 05:00:00 PM.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Obtient la fin de l&#39;heure pour 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
