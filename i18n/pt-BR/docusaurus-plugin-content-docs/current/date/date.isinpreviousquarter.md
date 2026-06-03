---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Indica se esta data ocorre durante o trimestre anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no trimestre atual.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o trimestre anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no trimestre atual.

-   `dateTime`: um valor de `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determine se o trimestre antes da hora atual do sistema é o trimestre anterior.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
