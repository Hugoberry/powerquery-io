---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Indica se este datetime ocorre durante a hora seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre na hora atual.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante a hora seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre na hora atual.

-   `dateTime`: um valor `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determinar se a hora seguinte à hora do sistema atual ocorre na hora seguinte.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
