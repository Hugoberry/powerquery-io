---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Indica se esta data ocorre durante o número de meses anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no mes actual.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Indica se o valor datetime <code>dateTime</code> fornecido está situado durante o número de meses anterior, tal como o determinan a data e a hora actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza no mes actual.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> que se vai avaliar.</li>      <li><code>months</code>: o número de meses.</li>      </ul>


## Examples

### Example #1 
Determinar se o mes antes da hora actual do sistema está situado  nos dous meses anteriores.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
