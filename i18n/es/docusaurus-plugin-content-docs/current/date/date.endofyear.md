---
title: Date.EndOfYear
---

# Date.EndOfYear


Devuelve el final del año.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Remarks

Devuelve el final del año que contiene `dateTime`, incluidos los segundos fraccionarios. Se mantiene la información de zona horaria.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` a partir del que se calcula el final del año.


## Examples

### Example #1
Obtener el final del año de 5/14/2011 05:00:00 p.m.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2
Obtener el final de la hora de 5/17/2011 05:00:00 p.m -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
