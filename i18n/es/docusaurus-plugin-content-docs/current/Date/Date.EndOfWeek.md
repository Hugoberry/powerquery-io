---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Devuelve el final de la semana.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Devuelve el final de la semana que contiene <code>dateTime</code>.    Esta función toma un valor opcional <code>Day</code> (<code>firstDayOfWeek</code>) para establecer el primer día de la semana para este cálculo relativo. El valor predeterminado es <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code>o <code>datetimezone</code> a partir del que se calcula el último día de la semana.</li>        <li><code>firstDayOfWeek</code>: <i>[opcional]</i> un valor <code>Day.Type</code> que representa el primer día de la semana. Los valores posibles son <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> y <code>Day.Saturday</code>. El valor predeterminado es <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Obtener el final de la semana de 5/14/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Obtener el final de la semana de 5/17/2011 05:00: 00 p.m. -7:00, siendo el domingo el primer día de la semana.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
