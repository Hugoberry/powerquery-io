---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


Indica se esta data ocorre durante a semana seguinte, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na semana atual.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante a semana seguinte, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na semana atual.

-   `dateTime`: um valor de `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determine se a semana após a hora atual do sistema é a semana seguinte.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
