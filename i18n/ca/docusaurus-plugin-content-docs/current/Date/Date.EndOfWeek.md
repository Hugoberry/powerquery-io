---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Retorna el final de la setmana.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Retorna el final de la setmana que conté el dia <code>dateTime</code>.    Aquesta funció pren un valor <code>Day</code> opcional, <code>firstDayOfWeek</code>, per definir el primer dia de la setmana per a aquest càlcul relatiu. El valor per defecte és <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a partir del qual es calcula el darrer dia de la setmana.</li>        <li><code>firstDayOfWeek</code>: <i>[Opcional]</i> Valor <code>Day.Type</code> que representa el primer dia de la setmana. Els valors possibles són <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> i <code>Day.Saturday</code>. El valor per defecte és <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Obté el final de la setmana per a 5/14/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Obté el final de la setmana per a 5/17/2011 05:00:00 pm -7:00, amb el diumenge com a primer dia de la setmana.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
