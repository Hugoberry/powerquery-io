---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


Indica se esta data ocorre durante o mês anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no mês atual.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o mês anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no mês atual.

-   `dateTime`: um valor de `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determine se o mês antes da hora atual do sistema é o mês anterior.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
