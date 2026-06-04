---
title: Date.Day
---

# Date.Day


Retorna el component dia.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Retorna el component dia d'un valor `date`, `datetime` o `datetimezone`.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` del qual s'extreu el component dia.


## Examples

### Example #1
Obté el component dia d'un valor `date`, `datetime` o `datetimezone` que representa la data i l'hora de 5/14/2011 05:00:00 pm.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
