---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

Renvoie la fin de l’heure.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

Renvoie la fin de l'heure représentée par <code>dateTime</code>, y compris les fractions de seconde. Les informations de fuseau horaire sont conservées.      <ul>        <li><code>dateTime</code> : une valeur <code>time</code>, <code>datetime</code>, ou <code>datetimezone</code> à partir de laquelle la fin de l’heure est calculée.</li>      </ul>


## Examples

### Example #1 
Obtient la fin de l&#39;heure pour 5/14/2011 05:00:00 PM.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Obtient la fin de l&#39;heure pour 5/17/2011 05:00:00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
