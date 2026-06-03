---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


Indica se este datetime ocorre durante o número de minutos anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no minuto atual.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o número de minutos anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no minuto atual.

-   `dateTime`: um valor `datetime` ou `datetimezone` a ser avaliado.
-   `minutes`: o número de minutos.


## Examples

### Example #1
Determinar se o minuto antes da hora do sistema atual ocorre nos dois minutos anteriores.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
