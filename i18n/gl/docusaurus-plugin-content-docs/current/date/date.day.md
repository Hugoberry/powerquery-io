---
title: Date.Day
---

# Date.Day


Devolve o compoñente de día.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Devolve o compoñente de día dun valor `date`, `datetime` ou `datetimezone`.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` a partir do que se extrae o compoñente de día.


## Examples

### Example #1
Obter o compoñente de día dun valor `date`, `datetime` ou `datetimezone` que representa a data e a hora 14/05/2011 05:00:00 p.m.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
