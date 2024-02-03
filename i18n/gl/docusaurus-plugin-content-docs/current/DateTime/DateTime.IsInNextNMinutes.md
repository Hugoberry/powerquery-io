---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Indica se este valor dataHora ocorre durante o próximo número de minutos, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no minuto actual.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Indica se o valor datetime <code>dateTime</code> fornecido está situado durante o próximo número de minutos, tal como o determinan a hora e a data actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza no minuto actual.      <ul>      <li><code>dateTime</code>: un valor <code>datetime</code> ou <code>datetimezone</code> a avaliar.</li>      <li><code>minutes</code>: o número de minutos.</li>      </ul>


## Examples

### Example #1 
Determinar se o minuto posterior ao da hora do sistema actual se atopa nos próximos dous minutos.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
