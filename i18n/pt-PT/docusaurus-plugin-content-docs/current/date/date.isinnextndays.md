---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Indica se esta data ocorre durante o número de dias seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no dia atual.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o próximo número de dias, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no dia atual.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a ser avaliado.
-   `days`: o número de dias.


## Examples

### Example #1
Determinar se o dia a seguir à hora atual no sistema é nos próximos dois dias.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
