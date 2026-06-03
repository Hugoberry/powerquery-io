---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Indica se este datetime ocorre durante o segundo anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no segundo atual.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o segundo anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no segundo atual.

-   `dateTime`: um valor `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determinar se o segundo antes da hora do sistema atual ocorre no segundo anterior.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
