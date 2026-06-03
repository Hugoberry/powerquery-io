---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


Indica se este datetime ocorre durante o minuto anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no minuto atual.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o minuto anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no minuto atual.

-   `dateTime`: um valor `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determinar se o minuto antes da hora do sistema atual ocorre no minuto anterior.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
