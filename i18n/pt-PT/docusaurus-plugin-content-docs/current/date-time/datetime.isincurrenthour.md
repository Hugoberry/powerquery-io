---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Indica se este datetime ocorre durante a hora atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime fornecido `dateTime` ocorre durante a hora atual, conforme determinado pela data e hora atuais no sistema.

-   `dateTime`: um valor `datetime`, ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determina se a hora atual do sistema está na hora atual.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
