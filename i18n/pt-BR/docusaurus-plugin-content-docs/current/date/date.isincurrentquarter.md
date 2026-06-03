---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Indica se essa data ocorre durante o trimestre atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o trimestre atual, conforme determinado pela data e hora atuais no sistema.

-   `dateTime`: Um valor `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determine se a hora atual do sistema ocorre no trimestre atual.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
