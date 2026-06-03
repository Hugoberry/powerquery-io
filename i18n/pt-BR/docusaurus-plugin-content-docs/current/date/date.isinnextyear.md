---
title: Date.IsInNextYear
---

# Date.IsInNextYear


Indica se esta data ocorre durante o ano seguinte, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no ano atual.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o ano seguinte, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no ano atual.

-   `dateTime`: um valor de `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determine se o ano após a hora atual do sistema é o ano seguinte.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
