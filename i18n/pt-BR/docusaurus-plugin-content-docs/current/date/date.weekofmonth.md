---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Retorna um número de 1 a 6 que indica em qual semana do mês esta data cairá.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Retorna um número de 1 a 6 que indica em qual semana do mês a data `dateTime` cairá.

-   `dateTime`: um valor `Data/Hora` para o qual a semana do m~es será determinada.


## Examples

### Example #1
Determine em qual semana de março cai o dia 15 de 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
