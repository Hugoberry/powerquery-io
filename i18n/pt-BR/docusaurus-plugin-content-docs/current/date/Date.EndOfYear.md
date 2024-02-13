---
title: Date.EndOfYear
---

# Date.EndOfYear


Retorna o final do ano.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Remarks

Retorna um valor que representa o fim do ano em <code>dateTime</code>, incluindo segundos fracionários. As informações de fuso horário são preservadas.      <ul>        <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> com base no qual o fim do ano é calculado.</li>      </ul>


## Examples

### Example #1 
Obtenha o fim do ano de 14/5/2011 05:00: 00 PM.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Obtenha o fim da hora de 17/5/2011 05:00: 00 PM -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
