---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Indica se esta data ocorre durante o número de semanas anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre na semana actual.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Indica se o valor datetime <code>dateTime</code> fornecido está situado durante o número de semanas anterior, tal como o determinan a data e a hora actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza na semana actual.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> que se vai avaliar.</li>      <li><code>weeks</code>: o número de semanas.</li>      </ul>


## Examples

### Example #1 
Determinar se a semana antes da hora actual do sistema está situada nas dúas semanas anteriores.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
