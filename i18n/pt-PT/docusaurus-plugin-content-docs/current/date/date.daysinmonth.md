---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Devolve um número de 28 a 31 que indica o número de dias no mês.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Devolve o número de dias no mês no valor `date`, `datetime` ou `datetimezone` `dateTime`.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` para o qual é devolvido o número de dias no mês.


## Examples

### Example #1
Número de dias no mês de dezembro conforme representado por `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
