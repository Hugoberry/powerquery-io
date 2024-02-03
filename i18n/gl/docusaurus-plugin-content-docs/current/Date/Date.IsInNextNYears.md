---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Indica se esta data ocorre durante o próximo número de anos, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no ano actual.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Indica se o valor datetime <code>dateTime</code> fornecido está situado durante o próximo número de anos, tal como o determinan a data e a hora actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza no ano actual.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> que se vai avaliar.</li>      <li><code>years</code>: o número de anos.</li>      </ul>


## Examples

### Example #1 
Determinar se o ano despois da hora actual do sistema está situado nos próximos dous anos.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
