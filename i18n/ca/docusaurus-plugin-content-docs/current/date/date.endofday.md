---
title: Date.EndOfDay
---

# Date.EndOfDay


Retorna el final del dia.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Retorna el final del dia representat per `dateTime`. Es conserva la informació del fus horari.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` a partir del qual es calcula el final del dia.


## Examples

### Example #1
Obté el final del dia per a 5/14/2011 05:00:00 pm.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2
Obté el final del dia per a 5/17/2011 05:00:00 pm -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
