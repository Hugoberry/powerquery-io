---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Renvoie la fin du mois.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Renvoie la fin du mois qui contient <code>dateTime</code>.      <ul>        <li><code>dateTime</code> : une valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à partir de laquelle la fin du mois est calculée</li>      </ul>


## Examples

### Example #1 
Obtient la fin du mois pour 5/14/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Obtient la fin du mois pour 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
