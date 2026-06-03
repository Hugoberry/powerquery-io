---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Indica se esta data ocorre durante o trimestre atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime especificado `dateTime` ocorre durante o trimestre atual, conforme determinado pela data e hora atuais no sistema.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a avaliar.


## Examples

### Example #1
Determinar se a hora do sistema atual ocorre no trimestre atual.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
