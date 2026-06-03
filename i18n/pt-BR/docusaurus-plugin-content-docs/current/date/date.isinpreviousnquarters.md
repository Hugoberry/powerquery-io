---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Indica se esta data ocorre durante o número de trimestres anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no trimestre atual.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o número de trimestres anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no trimestre atual.

-   `dateTime`: um valor de `date`, `datetime` ou `datetimezone` a ser avaliado.
-   `quarters`: o número de trimestres.


## Examples

### Example #1
Determina se o trimestre anterior à hora atual do sistema é nos dois trimestres anteriores.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
