---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

Indica se esta data ocorre durante o trimestre anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no trimestre actual.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

Indica se o valor dataHora <code>dateTime</code> fornecido ocorre durante o trimestre anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no trimestre actual.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> que se avaliará.</li>      </ul>


## Examples

### Example #1 
Determinar se o trimestre antes da hora actual do sistema está no trimestre anterior.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
