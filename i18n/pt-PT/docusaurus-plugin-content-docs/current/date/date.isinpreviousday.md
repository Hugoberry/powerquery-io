---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


Indica se esta data ocorre durante o dia anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no dia atual.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o dia anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no dia atual.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determinar se o dia anterior à hora do sistema atual ocorre no dia anterior.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
