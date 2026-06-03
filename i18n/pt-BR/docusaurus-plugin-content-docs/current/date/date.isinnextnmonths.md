---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Indica se esta data ocorre durante o próximo número de meses, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no mês atual.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o próximo número de meses, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no mês atual.

-   `dateTime`: um valor de `date`, `datetime` ou `datetimezone` a ser avaliado.
-   `months`: o número de meses.


## Examples

### Example #1
Determina se o mês após a hora atual do sistema é nos próximos dois meses.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
