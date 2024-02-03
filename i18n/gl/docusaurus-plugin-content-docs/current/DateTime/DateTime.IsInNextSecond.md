---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


## Description

Indica se este valor dataHora ocorre durante o próximo segundo, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no segundo actual.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Details

Indica se o valor dataHora <code>dateTime</code> fornecido ocorre durante o próximo segundo, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no segundo actual.      <ul>      <li><code>dateTime</code>: un valor <code>datetime</code> ou <code>datetimezone</code> que se avaliará.</li>      </ul>


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
