---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


Indica se este valor dataHora ocorre durante o próximo segundo, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no segundo actual.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor dataHora `dateTime` fornecido ocorre durante o próximo segundo, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no segundo actual.

-   `dateTime`: un valor `datetime` ou `datetimezone` que se avaliará.


## Examples

### Example #1
Determinar se o segundo posterior ao da hora do sistema actual se atopa no próximo segundo.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
