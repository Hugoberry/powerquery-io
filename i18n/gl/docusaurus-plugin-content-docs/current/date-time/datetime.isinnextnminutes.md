---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Indica se este valor dataHora ocorre durante o próximo número de minutos, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no minuto actual.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Indica se o valor datetime `dateTime` fornecido está situado durante o próximo número de minutos, tal como o determinan a hora e a data actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza no minuto actual.

-   `dateTime`: un valor `datetime` ou `datetimezone` a avaliar.
-   `minutes`: o número de minutos.


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
