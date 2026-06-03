---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Indica se essa data ocorre durante o mês atual, conforme determinado pela data e hora atuais do sistema.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o mês atual, conforme determinado pela data e hora atuais no sistema.

-   `dateTime`: Um valor `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determine se a hora atual do sistema ocorre no mês atual.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
