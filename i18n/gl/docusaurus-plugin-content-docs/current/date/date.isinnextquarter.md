---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


Indica se esta data ocorre durante o próximo trimestre, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no trimestre actual.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor dataHora `dateTime` fornecido ocorre durante o próximo trimestre, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no trimestre actual.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` que se avaliará.


## Examples

### Example #1
Determinar se o trimestre despois da hora actual do sistema está no próximo trimestre.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
