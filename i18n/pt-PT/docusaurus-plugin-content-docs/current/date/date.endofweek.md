---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Devolve o fim da semana.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Devolve o fim da semana que contém <code>dateTime</code>.    Esta função aceita um <code>Day</code> opcional, <code>firstDayOfWeek</code>, para definir como o primeiro dia da semana para este cálculo relativo. O valor predefinido é <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a partir do qual o último dia da semana é calculado</li>        <li><code>firstDayOfWeek</code>: <i>[Opcional]</i> um valor <code>Day.Type</code> que representa o primeiro dia da semana. Seguem-se os valores possíveis: <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> e <code>Day.Saturday.</code>. O valor predefinido é <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Obter o fim da semana para 14/5/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Obter o fim da semana para 17/5/2011 17:00:00 -7:00, sendo domingo o primeiro dia da semana.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
