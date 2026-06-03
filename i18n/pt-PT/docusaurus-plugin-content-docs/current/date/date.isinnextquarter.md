---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


Indica se esta data ocorre durante o trimestre seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no trimestre atual.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o próximo trimestre, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no trismestre atual.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determinar se o trimestre posterior à hora do sistema atual ocorre no trimestre seguinte.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
