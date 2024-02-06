---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Devolve um número de 1 a 6 que indica a semana do mês em que esta data recai.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Devolve um número de 1 a 6 que indica a semana do mês em que a data <code>dateTime</code> recai. <ul>        <li><code>dateTime</code>: um valor <code>datetime</code> para o qual a semana do mês é determinada.</li>      </ul>


## Examples

### Example #1 
Determine em que semana de março foi o dia 15 em 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
