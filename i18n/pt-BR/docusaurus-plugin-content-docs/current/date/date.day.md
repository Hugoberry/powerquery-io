---
title: Date.Day
---

# Date.Day


Retorna o componente de dia.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Retorna o componente de dia de um valor `date`, `datetime` ou `datetimezone`.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` com base no qual o componente de dia é extraído.


## Examples

### Example #1
Obtenha o componente de dia de um valor `date`, `datetime` ou `datetimezone` que representa a data e a hora 14/5/2011 05:00: 00 PM.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
