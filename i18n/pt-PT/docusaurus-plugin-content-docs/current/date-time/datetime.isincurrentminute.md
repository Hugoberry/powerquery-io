---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Indica se esta data ocorre durante o minuto atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime fornecido `dateTime` ocorre durante o minuto atual, conforme determinado pela data e hora atuais no sistema.

-   `dateTime`: um valor `datetime`, ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determinar se a hora atual do sistema ocorre no minuto atual.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
