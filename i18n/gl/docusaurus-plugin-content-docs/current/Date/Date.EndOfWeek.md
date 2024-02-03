---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Devolve o final da semana.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Devolve o final da semana que contén <code>dateTime</code>.    Esta función leva un <code>día</code> opcional,<code>firstDayOfWeek</code>, para establecer como primeiro día da semana para este cálculo relativo. O valor predefinido é <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, ou <code>datetimezone</code> valor a partir do cal se calcula o último día da semana</li>        <li><code>firstDayOfWeek</code>: <i>[Opcional]</i> Un valor <code>Day.Type</code> que representa o primeiro día da semana. Os valores posibles son <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> and <code>Day.Saturday.</code> . O valor predefinido é <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Obter o final da semana para o 14/05/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Obter o final da semana para o 17/05/2011 05:00:00 p.m. - 7:00, onde domingo é o primeiro día da semana.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
