---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Devuelve un número del 28 al 31 que indica el número de días del mes.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Devuelve el número de días del mes en el valor de `date`, `datetime` o `datetimezone` `dateTime`.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` para el que se devuelve el número de días del mes.


## Examples

### Example #1
Número de días del mes de diciembre representados por `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
