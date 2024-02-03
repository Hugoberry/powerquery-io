---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


## Description

Indica se este valor dataHora ocorre durante o minuto anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no minuto actual.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Details

Indica se o valor dataHora <code>dateTime</code> fornecido ocorre durante o minuto anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no minuto actual.      <ul>      <li><code>dateTime</code>: un valor <code>datetime</code> ou <code>datetimezone</code> que se avaliará.</li>      </ul>


## Examples

### Example #1 
Determinar se o minuto anterior á hora do sistema actual se atopa no minuto anterior.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
