---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Indica se esta dataHora se atopa no minuto actual, tal e como o determina a hora e data actual do sistema.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor dataHora `dateTime` fornecido se atopa no minuto actual, tal e como o determina a hora e data actual do sistema.

-   `dateTime`: un valor `datetime` ou `datetimezone` a avaliar.


## Examples

### Example #1
Determinar se a hora do sistema actual se atopa dentro do minuto actual.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
