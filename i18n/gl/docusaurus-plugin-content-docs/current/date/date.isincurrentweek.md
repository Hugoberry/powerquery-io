---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Indica se esta data ocorre durante a semana actual, como o determina a data e a hora actual do sistema.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de data e hora `dateTime` indicado ocorre durante a semana actual, como o determina a data e a hora actual do sistema.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` que se vai avaliar.


## Examples

### Example #1
Determinar se a hora actual do sistema está na semana actual.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
