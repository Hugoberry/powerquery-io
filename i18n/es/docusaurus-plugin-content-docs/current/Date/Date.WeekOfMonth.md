---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Devuelve un número del 1 al 6 que indica en qué semana del mes cae esta fecha.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Devuelve un número del 1 al 6 que indica en qué semana del mes <code>dateTime</code>cae la fecha . <ul>        <li><code>dateTime</code>: Un valor <code>datetime</code> para el que se determina la semana del mes.</li>      </ul>


## Examples

### Example #1 
Determinar en qué semana de marzo cae el día 15 en 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
