---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

Indica se esta data ocorre durante o próximo número de trimestres, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no trimestre actual.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Indica se o valor datetime <code>dateTime</code> fornecido está situado durante o próximo número de trimestres, tal como o determinan a data e a hora actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza no trimestre actual.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> que se vai avaliar.</li>      <li><code>quarters</code>: o número de trimestres.</li>      </ul>


## Examples

### Example #1 
Determinar se o trimestre despois da hora actual do sistema está situado nos próximos dous trimestres.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
