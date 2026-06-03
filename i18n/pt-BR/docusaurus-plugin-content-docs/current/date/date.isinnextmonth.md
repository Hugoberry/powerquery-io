---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


Indica se esta data ocorre durante o mês seguinte, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no mês atual.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o mês seguinte, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no mês atual.

-   `dateTime`: um valor de `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determine se o mês após a hora atual do sistema é o mês seguinte.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
