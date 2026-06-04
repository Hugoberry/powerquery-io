---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


Indica se esta data ocorre durante o mes anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no mes actual.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor dataHora `dateTime` fornecido ocorre durante o mes anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no mes actual.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` que se avaliará.


## Examples

### Example #1
Determinar se o mes antes da hora actual do sistema está no mes anterior.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
