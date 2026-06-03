---
title: Date.EndOfDay
---

# Date.EndOfDay


Devuelve el final del día.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Devuelve el final del día representado por `dateTime`. Se conserva la información de zona horaria.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` a partir del cual se calcula el final del día.


## Examples

### Example #1
Obtener el final del día para 5/14/2011 05:00:00 p.m.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2
Obtener el final del día para 5/17/2011 05:00:00 p.m -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
