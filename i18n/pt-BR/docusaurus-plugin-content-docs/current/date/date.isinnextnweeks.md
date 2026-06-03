---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


Indica se esta data ocorre durante o próximo número de semanas, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na semana atual.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o próximo número de semanas, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na semana atual.

-   `dateTime`: um valor de `date`, `datetime` ou `datetimezone` a ser avaliado.
-   `weeks`: o número de semanas.


## Examples

### Example #1
Determina se o semana após a hora atual do sistema é nas próximas duas semanas.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
