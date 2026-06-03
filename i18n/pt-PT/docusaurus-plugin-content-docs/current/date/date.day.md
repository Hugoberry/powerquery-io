---
title: Date.Day
---

# Date.Day


Devolve o componente de dia.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Devolve o componente de dia de um valor `date`, `datetime` ou `datetimezone`.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a partir do qual o componente de dia é extraído.


## Examples

### Example #1
Obter o componente de dia de um valor `date`, `datetime` ou `datetimezone` que representa a data e hora 14/5/2011 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
