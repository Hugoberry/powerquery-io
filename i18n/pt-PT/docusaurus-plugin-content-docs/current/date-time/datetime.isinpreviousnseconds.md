---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Indica se este datetime ocorre durante o número de segundos anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no segundo atual.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o número de segundos anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no segundo atual.

-   `dateTime`: um valor `datetime` ou `datetimezone` a ser avaliado.
-   `seconds`: o número de segundos.


## Examples

### Example #1
Determinar se o segundo antes da hora do sistema atual ocorre nos dois segundos anteriores.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
