---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Devuelve un número (del 0 al 6) que indica el día de la semana del valor proporcionado.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Devuelve un número (del 0 al 6) que indica el día de la semana que ocupa el valor <code>dateTime</code> proporcionado.  <ul>        <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.</li>        <li><code>firstDayOfWeek</code>: valor <code>Day</code> que indica qué día debería considerarse el primero de la semana. Los valores permitidos son Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday o Day.Saturday. Si no se especifica ningún valor, se utilizará uno predeterminado que dependerá de la referencia cultural.</li>      </ul>


## Examples

### Example #1 
Defina el día de la semana como &#34;Lunes, 21 de febrero de 2011&#34; y establezca que el domingo sea el primer día de la semana.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Defina el día de la semana como &#34;Lunes, 21 de febrero de 2011&#34; y establezca que el lunes sea el primer día de la semana.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
