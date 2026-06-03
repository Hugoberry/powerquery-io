---
title: Date.EndOfDay
---

# Date.EndOfDay


Devolve o fim do dia.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Devolve o fim do dia representado por `dateTime`. As informações de fuso horário são preservadas.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a partir do qual o fim do dia é calculado.


## Examples

### Example #1
Obter o fim do dia para 14/5/2011 17:00:00.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2
Obter o fim do dia para 17/5/2011 17:00:00 -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
