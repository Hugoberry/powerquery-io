---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Indica se esta data ocorre durante o día actual, como o determina a data e a hora actual do sistema.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de data e hora `dateTime` indicado ocorre durante o día actual, como o determina a data e a hora actual do sistema.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` que se vai avaliar.


## Examples

### Example #1
Determinar se a hora actual do sistema está no día actual.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
