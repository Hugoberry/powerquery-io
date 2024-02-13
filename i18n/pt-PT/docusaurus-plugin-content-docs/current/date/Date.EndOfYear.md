---
title: Date.EndOfYear
---

# Date.EndOfYear


Devolve o fim do ano.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Remarks

Devolve o fim do ano que contém <code>dateTime</code>, incluindo segundos fracionais. As informações de fuso horário são mantidas.      <ul>        <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a partir do qual o fim do ano é calculado.</li>      </ul>


## Examples

### Example #1 
Obter o fim do ano para 14/5/2011 17:00:00.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Obter o fim da hora para 17/5/2011 17:00:00 -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
