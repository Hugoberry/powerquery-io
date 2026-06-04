---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


Indica se este valor dataHora ocorre durante o próximo minuto, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no minuto actual.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor dataHora `dateTime` fornecido ocorre durante o próximo minuto, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no minuto actual.

-   `dateTime`: un valor `datetime` ou `datetimezone` que se avaliará.


## Examples

### Example #1
Determinar se o minuto posterior ao do sistema actual se atopa no próximo minuto.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
