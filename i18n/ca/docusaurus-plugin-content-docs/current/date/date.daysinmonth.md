---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Retorna un nombre del 28 al 31 que indica el nombre de dies del mes.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Retorna el nombre de dies del mes del valor `date`, `datetime` o `datetimezone`, `dateTime`.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` per al qual es retorna el nombre de dies del mes.


## Examples

### Example #1
Nombre de dies del mes de desembre representat per `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
