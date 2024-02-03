---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


## Description

Indica se este valor dataHora ocorre durante o número de segundos anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no segundo actual.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Indica se o valor datetime <code>dateTime</code> fornecido está situado durante o número de segundos anterior, tal como o determinan a hora e a data actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza no segundo actual.      <ul>      <li><code>dateTime</code>: un valor <code>datetime</code> ou <code>datetimezone</code> a avaliar.</li>      <li><code>seconds</code>: o número de segundos.</li>      </ul>


## Examples

### Example #1 
Determinar se o segundo anterior ao da hora do sistema actual se atopa nos dous segundos anteriores.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
