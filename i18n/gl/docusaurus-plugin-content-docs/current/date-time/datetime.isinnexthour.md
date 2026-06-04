---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Indica se este valor dataHora ocorre durante a próxima hora, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre na hora actual.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor dataHora `dateTime` fornecido ocorre durante a próxima hora, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre na hora actual.

-   `dateTime`: un valor `datetime` ou `datetimezone` que se avaliará.


## Examples

### Example #1
Determinar se a hora posterior á do sistema actual se atopa na próxima hora.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
