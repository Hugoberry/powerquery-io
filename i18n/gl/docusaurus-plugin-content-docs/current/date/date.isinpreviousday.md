---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


Indica se esta data ocorre durante o día anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no día actual.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor dataHora `dateTime` fornecido ocorre durante o día anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no día actual.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` que se avaliará.


## Examples

### Example #1
Determinar se o día antes da hora actual do sistema está no día anterior.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
