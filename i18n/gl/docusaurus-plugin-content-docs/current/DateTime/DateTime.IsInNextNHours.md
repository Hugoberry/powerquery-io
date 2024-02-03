---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

Indica se este valor dataHora ocorre durante o próximo número de horas, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre na hora actual.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Indica se o valor datetime <code>dateTime</code> fornecido está situado durante o próximo número de horas, tal como o determinan a hora e a data actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza na hora actual.      <ul>      <li><code>dateTime</code>: un valor <code>datetime</code> ou <code>datetimezone</code> a avaliar.</li>      <li><code>hours</code>: o número de horas.</li>      </ul>


## Examples

### Example #1 
Determinar se a hora posterior á do sistema actual se atopa nas próximas dúas horas.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
