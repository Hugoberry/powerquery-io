---
title: Time.EndOfHour
---

# Time.EndOfHour


Retorna o final da hora.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Retorna o final da hora representado por <code>dateTime</code>, incluindo segundos fracionários. As informações de fuso horário são preservadas.      <ul>        <li><code>dateTime</code>: um valor <code>time</code>, <code>datetime</code> ou <code>datetimezone</code> a partir do qual o fim da hora é calculado.</li>      </ul>


## Examples

### Example #1 
Obtenha o fim da hora de 14/5/2011 05:00: 00 PM.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Obtenha o fim da hora de 17/5/2011 05:00: 00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
