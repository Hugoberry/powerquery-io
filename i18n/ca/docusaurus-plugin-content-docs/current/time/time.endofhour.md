---
title: Time.EndOfHour
---

# Time.EndOfHour


Retorna el final de l'hora.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Retorna el final de l'hora representada per `dateTime`, incloent-hi els segons fraccionaris. Es conserva la informació de fus horari.

-   `dateTime`: valor `time`, `datetime` o `datetimezone` a partir del qual es calcula el final de l'hora.


## Examples

### Example #1
Obté el final de l'hora per a 5/14/2011 05:00:00 pm.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Obté el final de l'hora per a 5/17/2011 05:00:00 pm -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
