---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Indica se este valor dataHora ocorre durante o número de segundos anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no segundo actual.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indica se o valor datetime `dateTime` fornecido está situado durante o número de segundos anterior, tal como o determinan a hora e a data actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza no segundo actual.

-   `dateTime`: un valor `datetime` ou `datetimezone` a avaliar.
-   `seconds`: o número de segundos.


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
