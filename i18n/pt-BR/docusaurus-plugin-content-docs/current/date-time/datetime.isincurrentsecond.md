---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Indica se este datetime ocorre durante o segundo atual, conforme determinado pelo horário e pela data atuais do sistema.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime fornecido `dateTime` ocorre durante o segundo atual, conforme determinado pelo horário e pela data atuais do sistema.

-   `dateTime`: Um valor `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determinar se o horário atual do sistema está no segundo atual.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
