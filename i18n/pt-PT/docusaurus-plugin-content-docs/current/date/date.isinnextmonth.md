---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


Indica se esta data ocorre durante o mês seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no mês atual.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o mês seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no mês atual.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determinar se o mês posterior à hora do sistema atual ocorre no mês seguinte.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
