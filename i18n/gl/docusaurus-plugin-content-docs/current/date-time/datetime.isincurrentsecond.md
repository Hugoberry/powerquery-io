---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Indica se esta dataHora se atopa dentro do segundo actual, tal e como o determina a hora e data actual do sistema.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor dataHora `dateTime` fornecido se atopa durante o segundo actual, tal e como o determina a hora e data actual do sistema.

-   `dateTime`: un valor `datetime` ou `datetimezone` a avaliar.


## Examples

### Example #1
Determinar se a hora do sistema actual se atopa no segundo actual.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
