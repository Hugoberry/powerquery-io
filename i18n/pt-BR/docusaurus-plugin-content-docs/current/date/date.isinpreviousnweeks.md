---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Indica se esta data ocorre durante o número de semanas anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na semana atual.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o número de semanas anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na semana atual.

-   `dateTime`: um valor de `date`, `datetime` ou `datetimezone` a ser avaliado.
-   `weeks`: o número de semanas.


## Examples

### Example #1
Determina se a semana anterior à hora atual do sistema é nas duas semanas anteriores.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
