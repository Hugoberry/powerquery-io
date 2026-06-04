---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Retorna el final del mes.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Retorna el final del mes que conté el dia `dateTime`.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` a partir del qual es calcula el final del mes.


## Examples

### Example #1
Obté el final del mes per a 5/14/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
Obté el final del mes per a 5/17/2011 05:00:00 pm -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
