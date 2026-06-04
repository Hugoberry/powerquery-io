---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Indica se esta data ocorre durante o número de trimestres anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no trimestre actual.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indica se o valor datetime `dateTime` fornecido está situado durante o número de trimestres anterior, tal como o determinan a data e a hora actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza no trimestre actual.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` que se vai avaliar.
-   `quarters`: o número de trimestres.


## Examples

### Example #1
Determinar se o trimestre antes da hora actual do sistema está situado nos dous trimestres anteriores.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
