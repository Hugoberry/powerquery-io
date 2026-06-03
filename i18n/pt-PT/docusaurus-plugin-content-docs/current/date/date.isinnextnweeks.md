---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


Indica se esta data ocorre durante o número de semanas seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre na semana atual.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o próximo número de semanas, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre na semana atual.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a ser avaliado.
-   `weeks`: o número de semanas.


## Examples

### Example #1
Determinar se a semana a seguir à hora atual no sistema é nas duas próximas semanas.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
