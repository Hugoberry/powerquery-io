---
title: Time.EndOfHour
---

# Time.EndOfHour


Devuelve el final de la hora.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Devuelve el final de la hora representada por <code>dateTime</code>, incluidas las fracciones de segundo. Se conserva la información de zona horaria.      <ul>      <li><code>dateTime</code>: un valor <code>time</code>, <code>datetime</code> o <code>datetimezone</code> a partir del cual se calcula el final de la hora.</li> </ul>


## Examples

### Example #1 
Obtener el final de la hora de 5/14/2011 05:00:00 p.m.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Obtener el final de la hora de 5/17/2011 05:00:00 p.m -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
