---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Indica se esta data ocorre durante o próximo número de anos, tal e como o determinan a data e hora actuais do sistema. Teña en conta que esta función devolverá false se se pasa un valor que ocorre no ano actual.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indica se o valor datetime `dateTime` fornecido está situado durante o próximo número de anos, tal como o determinan a data e a hora actuais do sistema. Teña en conta que esta función devolverá false cando se pase un valor que aconteza no ano actual.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` que se vai avaliar.
-   `years`: o número de anos.


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
