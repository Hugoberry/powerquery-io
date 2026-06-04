---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Indica se esta data ocorre durante o trimestre anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no trimestre actual.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor dataHora `dateTime` fornecido ocorre durante o trimestre anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no trimestre actual.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` que se avaliará.


## Examples

### Example #1
Determinar se o trimestre antes da hora actual do sistema está no trimestre anterior.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
