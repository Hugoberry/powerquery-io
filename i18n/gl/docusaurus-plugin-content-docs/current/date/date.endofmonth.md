---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Devolve o final do mes.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Devolve o final do mes que contén `dateTime`.

-   `dateTime`: Un valor de `date`, `datetime` ou `datetimezone` a partir do cal se calcula o final do mes.


## Examples

### Example #1
Obter o final do mes para o 14/05/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
Obter o final do mes para o 17/05/2011 05:00:00 p.m. - 7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
