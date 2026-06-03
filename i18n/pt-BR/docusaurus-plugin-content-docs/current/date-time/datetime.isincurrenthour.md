---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Indica se este datetime ocorre durante a hora atual, conforme determinado pelo horário e pela data atuais do sistema.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime fornecido `dateTime` ocorre durante a hora atual, conforme determinado pelo horário e pela data atuais do sistema.

-   `dateTime`: Um valor `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determinar se o horário atual do sistema está na hora atual.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
