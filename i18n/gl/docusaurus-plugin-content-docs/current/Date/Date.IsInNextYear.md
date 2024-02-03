---
title: Date.IsInNextYear
---

# Date.IsInNextYear


## Description

Indica se esta data ocorre durante o próximo ano, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no ano actual.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Details

Indica se o valor dataHora <code>dateTime</code> fornecido ocorre durante o próximo ano, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no ano actual.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> que se avaliará.</li>      </ul>


## Examples

### Example #1 
Determinar se o ano despois da hora actual do sistema está no próximo ano.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
