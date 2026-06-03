---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Indica se esta data ocorre durante o dia seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no dia atual.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o dia seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no dia atual.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determinar se o dia posterior à hora do sistema atual ocorre no dia seguinte.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
