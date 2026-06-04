---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Devolve un número de 28 a 31 que indica o número de días do mes.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Devolve o número de días do mes no valor `date`, `datetime` ou `datetimezone` `dateTime`.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` para o que se devolve o número de días do mes.


## Examples

### Example #1
Número de días do mes de decembro representado por `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
