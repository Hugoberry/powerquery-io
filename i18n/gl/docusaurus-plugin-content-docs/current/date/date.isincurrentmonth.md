---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Indica se esta data ocorre durante o mes actual, como o determina a data e a hora actual do sistema.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de data e hora `dateTime` indicado ocorre durante o mes actual, como o determina a data e a hora actual do sistema.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` que se vai avaliar.


## Examples

### Example #1
Determinar se a hora actual do sistema está no mes actual.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
