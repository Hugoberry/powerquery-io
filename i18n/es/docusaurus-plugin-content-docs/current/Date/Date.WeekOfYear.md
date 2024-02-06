---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Devuelve un número del 1 al 54 que indica en qué semana del año cae esta fecha.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Devuelve un número del 1 al 54 que indica qué en que semana del año cae la fecha, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: un valor <code>datetime</code> para el que se determina la semana del año.</li>        <li><code>firstDayOfWeek</code>: un valor opcional <code>Day.Type</code> que indica qué día se considera que el inicio de una nueva semana (por ejemplo, <code>Day.Sunday</code>). Si no se especifica, se usa un valor predeterminado dependiente de la referencia cultural.</li>      </ul>


## Examples

### Example #1 
Determinar qué semana del año contiene el 27 de marzo de 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Determinar qué semana del año contiene el 27 de marzo de 2011, usando lunes como inicio de la semana.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
