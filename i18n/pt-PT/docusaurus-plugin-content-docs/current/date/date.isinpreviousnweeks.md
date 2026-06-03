---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Indica se esta data ocorre durante o número de semanas anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre na semana atual.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o número de semanas anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre na semana atual.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a ser avaliado.
-   `weeks`: o número de semanas.


## Examples

### Example #1
Determinar se a semana anterior à hora atual no sistema é nas duas últimas semanas.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
