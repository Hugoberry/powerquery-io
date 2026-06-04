---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Indica se este valor dataHora ocorre durante o número de horas anterior, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre na hora actual.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indica se o valor datetime `dateTime` fornecido está situado durante o número de horas anterior, tal como o determinan a hora e a data actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza na hora actual.

-   `dateTime`: un valor `datetime` ou `datetimezone` a avaliar.
-   `hours`: o número de horas.


## Examples

### Example #1
Determinar se a hora anterior á hora do sistema actual se atopa nas dúas horas anteriores.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
