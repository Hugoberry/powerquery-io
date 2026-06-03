---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Indica se este datetime ocorre durante o minuto atual, conforme determinado pelo horário e pela data atuais do sistema.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime fornecido `dateTime` ocorre durante o minuto atual, conforme determinado pelo horário e pela data atuais do sistema.

-   `dateTime`: Um valor `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determinar se o horário atual do sistema está no minuto atual.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
