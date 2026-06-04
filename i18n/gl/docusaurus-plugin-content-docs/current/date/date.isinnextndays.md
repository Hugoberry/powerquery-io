---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Indica se esta data ocorre durante o próximo número de días, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no día actual.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indica se o valor datetime `dateTime` fornecido está situado durante o próximo número de días, tal como o determinan a data e a hora actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza no día actual.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` que se vai avaliar.
-   `days`: o número de días.


## Examples

### Example #1
Determinar se o día despois da hora actual do sistema está nos próximos dous días.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
