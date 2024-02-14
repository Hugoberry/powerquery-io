---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Retorna o final da semana.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Retorna o final da semana que contém <code>dateTime</code>.    Esta função recebe um opcional <code>Day</code>, <code>firstDayOfWeek</code>, para definir como o primeiro dia da semana para este cálculo relativo. o valor padrão é <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> valor a partir do qual o último dia da semana é calculado</li>        <li><code>firstDayOfWeek</code>: <i>[Optional]</i> um valor <code>Day.Type</code> representando o primeiro dia da semana. Os valores possíveis são <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> e <code>Day.Saturday.</code> . O valor padrão é <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Obtenha o fim da semana de 14/5/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Obtenha o fim da semana de 17/5/2011 05:00: 00 PM. -7:00, considerando o domingo como primeiro dia da semana.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
