---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Indica se esta dataHora se atopa na hora actual, tal e como o determina a hora e data actual do sistema.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor dataHora `dateTime` fornecido se atopa na hora actual, tal e como o determina a hora e data actual do sistema.

-   `dateTime`: un valor `datetime` ou `datetimezone` a avaliar.


## Examples

### Example #1
Determina se a hora actual do sistema se atopa dentro da hora actual.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
