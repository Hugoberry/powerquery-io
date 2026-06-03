---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Retorna um número de 28 a 31 que indica o número de dias do mês.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Retorna o número de dias do mês no valor `date`, `datetime` ou `datetimezone` `dateTime`.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` para o qual o número de dias do mês é retornado.


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
