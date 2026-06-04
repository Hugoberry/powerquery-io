---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Indica se esta data ocorre durante o próximo número de meses, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no mes actual.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indica se o valor datetime `dateTime` fornecido está situado durante o próximo número de meses, tal como o determinan a data e a hora actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza no mes actual.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` que se vai avaliar.
-   `months`: o número de meses.


## Examples

### Example #1
Determinar se o mes despois da hora actual do sistema está situado nos próximos dous meses.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
