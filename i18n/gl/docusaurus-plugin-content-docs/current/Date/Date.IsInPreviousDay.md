---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


## Description

Indica se esta data ocorre durante o día anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no día actual.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Details

Indica se o valor dataHora <code>dateTime</code> fornecido ocorre durante o día anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no día actual.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> que se avaliará.</li>      </ul>


## Examples

### Example #1 
Determinar se o día antes da hora actual do sistema está no día anterior.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
